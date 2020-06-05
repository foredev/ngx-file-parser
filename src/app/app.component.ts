import { Component } from '@angular/core';
import {
  NgxFileParserConfig,
  INgxCsv,
  INgxResult,
  INgxJson,
  INgxComplexCsv,
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
    btnColor: 'primary',
    csvNamedProperties: false,
  };
  parsedFileCsv: INgxCsv;
  parsedFileComplexCsv: INgxComplexCsv[];
  parsedFileJson: INgxJson;
  handleParsedFile(parsedFileObj: INgxResult) {
    if (parsedFileObj.extension === '.csv') {
      if (this.ngxFileParserConfig.csvNamedProperties) {
        this.parsedFileComplexCsv = parsedFileObj.result as INgxComplexCsv[];
      } else {
        this.parsedFileCsv = parsedFileObj.result as INgxCsv;
      }
    } else if (parsedFileObj.extension === '.json') {
      this.parsedFileJson = parsedFileObj.result as INgxJson;
    }
  }
}
