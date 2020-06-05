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
  NgxFileButtonConfig,
  SUPPORTED_RETURN_OBJECTS,
} from '../../interfaces';
import { NgxFileParserService } from '../../ngx-file-parser.service';
import { NgxParser, CsvParserService } from '../../parsers';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent implements OnDestroy {
  private readonly defaultBtnConfig: NgxFileButtonConfig = {
    icon: 'backup',
    text: 'Choose file',
    accepts: ['.csv'],
  };
  private BTN_CONFIG: NgxFileButtonConfig = this.defaultBtnConfig;

  get btnConfig(): NgxFileButtonConfig {
    return this.BTN_CONFIG;
  }

  @Input()
  set btnConfig(val: NgxFileButtonConfig) {
    if (val) {
      val = {
        ...this.btnConfig,
        icon: val.icon ? val.icon : this.defaultBtnConfig.icon,
        text: val.text ? val.text : this.defaultBtnConfig.text,
      };
      this.BTN_CONFIG = val;
    }
  }
  private parser: NgxParser<object>;

  private $parsed: Subscription;

  @Output() parsedFile = new EventEmitter<SUPPORTED_RETURN_OBJECTS>();

  constructor(
    private ngxFileParserService: NgxFileParserService,
    private injector: Injector
  ) {}

  onFileInput($event: any) {
    if ($event.srcElement.files) {
      const file: File = $event.srcElement.files[0];

      if (this.ngxFileParserService.validFile(file, this.btnConfig.accepts)) {
        const extension = this.ngxFileParserService.getExtension(file.name);

        this.setParser(extension);

        this.$parsed = this.parser.$parsed
          .pipe(filter((val) => val !== null))
          .subscribe((res: SUPPORTED_RETURN_OBJECTS) => {
            this.parsedFile.emit(res);
            this.$parsed.unsubscribe();
          });
        this.parser.parse(file);
      }
    }
  }
  setParser(extension: string): void {
    switch (extension) {
      case '.csv':
        this.parser = this.injector.get(CsvParserService);
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
