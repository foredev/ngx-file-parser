import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgxParser } from '../parsers';
import { INgxCsv } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CsvParserService implements NgxParser<INgxCsv> {
  private parsed: BehaviorSubject<INgxCsv> = new BehaviorSubject<INgxCsv>(null);
  readonly $parsed: Observable<INgxCsv> = this.parsed.asObservable();

  constructor() {}

  parse(file: File): void {
    const reader = new FileReader();

    reader.readAsText(file, 'utf-8');

    reader.onload = () => {
      const csvData = reader.result;
      const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
      const headersRow = this.getHeaderArray(csvRecordsArray);
      this.parsed.next({
        headers: headersRow,
        data: this.getDataArray(csvRecordsArray.splice(1)),
      } as INgxCsv);
    };
  }
  private getHeaderArray(csvRecordsArr: any): string[] {
    const headers = (csvRecordsArr[0] as string)
      .split(',')
      .map((val) => val.replace(/"/g, ''));
    return headers;
  }

  private getDataArray(csvRecordsArr: string[]): string[][] {
    const arr = [];

    for (const currentRow of csvRecordsArr) {
      const rowArray = currentRow
        .split('","')
        .map((val) => val.replace(/"/g, ''));
      // Some csv files seems to have different formats thus the "," delimeter does not catch all delimeters
      if (rowArray.length === 1) {
        arr.push(rowArray[0].split(','));
      } else {
        arr.push(rowArray);
      }
    }
    return arr;
  }
}
