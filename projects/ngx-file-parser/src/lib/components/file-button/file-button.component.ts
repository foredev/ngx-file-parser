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
import { NgxFileButtonConfig } from '../../interfaces/config.model';
import { NgxFileParserService } from '../../ngx-file-parser.service';
import { NgxParser } from '../../parsers/parser.interface';
import { CsvParserService } from '../../parsers/csv-parser.service';

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
    multiple: false,
  };
  private BTN_CONFIG: NgxFileButtonConfig = this.defaultBtnConfig;

  get btnConfig(): NgxFileButtonConfig {
    return this.BTN_CONFIG;
  }

  @Input()
  set btnConfig(val: NgxFileButtonConfig) {
    if (val) {
      if (!val.icon) {
        val.icon = this.defaultBtnConfig.icon;
      }
      if (!val.text) {
        val.icon = this.defaultBtnConfig.text;
      }
      this.BTN_CONFIG = val;
    }
  }
  private parser: NgxParser<object>;

  private $parsed: Subscription;

  @Output() parsedFile = new EventEmitter<object>();

  constructor(
    private ngxFileParserService: NgxFileParserService,
    private injector: Injector
  ) {}

  onFileInput($event: any) {
    if (!this.btnConfig.multiple && $event.srcElement.files) {
      const file: File = $event.srcElement.files[0];

      if (this.ngxFileParserService.validFile(file, this.btnConfig.accepts)) {
        const extension = this.ngxFileParserService.getExtension(file.name);

        this.setParser(extension);

        this.$parsed = this.parser.$parsed
          .pipe(filter((val) => val !== null))
          .subscribe((res) => {
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
