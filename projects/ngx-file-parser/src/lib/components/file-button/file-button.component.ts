import {
  Component,
  Input,
  Injector,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  NgxFileParserConfig,
  SUPPORTED_RETURN_OBJECTS,
  INgxResult,
} from '../../interfaces';
import { NgxFileParserService } from '../../ngx-file-parser.service';
import { NgxParser, CsvParserService, JsonParserService } from '../../parsers';
import { ComplexCsvParserService } from '../../parsers/complex-csv-parser.service';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent implements OnDestroy {
  private readonly defaultConfig: NgxFileParserConfig = {
    btnIcon: 'backup',
    btnText: 'Choose file',
    accepts: ['.csv'],
    btnColor: '',
    csvNamedProperties: false,
  };
  private CONFIG: NgxFileParserConfig = this.defaultConfig;

  get config(): NgxFileParserConfig {
    return this.CONFIG;
  }

  @Input()
  set config(val: NgxFileParserConfig) {
    if (val) {
      val = {
        ...this.CONFIG,
        btnIcon: val.btnIcon ? val.btnIcon : this.defaultConfig.btnIcon,
        btnText: val.btnText ? val.btnText : this.defaultConfig.btnText,
        accepts: val.accepts ? val.accepts : this.defaultConfig.accepts,
        btnColor: val.btnColor ? val.btnColor : this.defaultConfig.btnColor,
        csvNamedProperties: val.csvNamedProperties
          ? val.csvNamedProperties
          : this.defaultConfig.csvNamedProperties,
      };
      this.CONFIG = val;
    }
  }
  private parser: NgxParser<object>;

  private $parsed: Subscription;

  @Output() parsedFile = new EventEmitter<INgxResult>();

  constructor(
    private ngxFileParserService: NgxFileParserService,
    private injector: Injector
  ) {}

  onFileInput($event: any) {
    if ($event.srcElement.files) {
      const file: File = $event.srcElement.files[0];

      if (
        this.ngxFileParserService.validFile(file, this.defaultConfig.accepts)
      ) {
        const extension = this.ngxFileParserService.getExtension(file.name);

        this.setParser(extension);

        this.$parsed = this.parser.$parsed
          .pipe(filter((val) => val !== null))
          .subscribe((res: SUPPORTED_RETURN_OBJECTS) => {
            this.parsedFile.emit({ extension, result: res } as INgxResult);
            this.$parsed.unsubscribe();
          });
        this.parser.parse(file);
      }
    }
  }
  setParser(extension: string): void {
    switch (extension) {
      case '.csv':
        this.parser = this.config.csvNamedProperties
          ? this.injector.get(ComplexCsvParserService)
          : this.injector.get(CsvParserService);
        return;
      case '.json':
        this.parser = this.injector.get(JsonParserService);
        return;
      default:
        return;
    }
  }
  ngOnDestroy() {
    if (this.$parsed) {
      this.$parsed.unsubscribe();
    }
  }
}
