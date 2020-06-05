import { Component } from '@angular/core';
import {
  NgxFileParserConfig,
  INgxCsv,
  INgxResult,
  INgxJson,
} from 'projects/ngx-file-parser/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngxFileParserConfig: NgxFileParserConfig = {
    btnText: 'Upload',
    accepts: ['.csv', '.json'],
  };
  parsedFileCsv: INgxCsv;
  parsedFileJson: INgxJson;
  handleParsedFile(parsedFileObj: INgxResult) {
    if (parsedFileObj.extension === '.csv') {
      this.parsedFileCsv = parsedFileObj.result as INgxCsv;
    } else if (parsedFileObj.extension === '.json') {
      this.parsedFileJson = parsedFileObj.result as INgxJson;
    }
  }
}
