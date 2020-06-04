import { Component, OnInit, Input } from '@angular/core';
import { NgxFileButtonConfig } from '../../interfaces/config.model';

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

  constructor() {}
  onFileInput($event: Event) {}
}
