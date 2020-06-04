import { Component, Input, Injector } from '@angular/core';
import { NgxFileButtonConfig } from '../../interfaces/config.model';
import { NgxFileParserService } from '../../ngx-file-parser.service';
import { NgxParser } from '../../parsers/parser.interface';
import { CsvParserService } from '../../parsers/csv-parser.service';
import { INgxCsv } from '../../interfaces/csv.interface';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent {
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
}
