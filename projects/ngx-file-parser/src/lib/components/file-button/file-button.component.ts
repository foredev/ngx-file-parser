import { Component, OnInit, Input } from '@angular/core';
import { NgxFileButtonConfig } from '../../interfaces/config.interface';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent implements OnInit {
  @Input() btnConfig: NgxFileButtonConfig;
  constructor() {}

  ngOnInit(): void {
    if (!this.btnConfig) {
      this.btnConfig = {
        text: 'Upload',
        icon: 'backup',
      } as NgxFileButtonConfig;
    }
  }
}
