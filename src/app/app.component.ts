import { Component } from '@angular/core';
import { NgxFileButtonConfig } from 'projects/ngx-file-parser/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  btnConfig: NgxFileButtonConfig = {
    text: 'Upload',
    accepts: ['.csv'],
  };
}
