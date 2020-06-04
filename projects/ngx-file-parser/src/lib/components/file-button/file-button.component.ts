import { Component, OnInit, Input } from '@angular/core';
import { NgxFileButtonConfig } from '../../interfaces/config.model';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent implements OnInit {
  private readonly defaultBtnConfig: NgxFileButtonConfig = {
    icon: 'backup',
    text: 'Choose file',
  };
  private _btnConfig: NgxFileButtonConfig = this.defaultBtnConfig;

  get btnConfig(): NgxFileButtonConfig {
    return this._btnConfig;
  }

  @Input()
  set btnConfig(val: NgxFileButtonConfig) {
    if (val) {
      if (!val.icon) val.icon = this.defaultBtnConfig.icon;
      if (!val.text) val.icon = this.defaultBtnConfig.text;
      this._btnConfig = val;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
