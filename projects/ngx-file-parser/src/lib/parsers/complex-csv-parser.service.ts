import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxParser } from './parser.interface';
import { INgxComplexCsv } from '../interfaces/complex-csv.interface';

@Injectable({
  providedIn: 'root',
})
export class ComplexCsvParserService implements NgxParser<INgxComplexCsv[]> {
  private parsed: BehaviorSubject<INgxComplexCsv[]> = new BehaviorSubject<
    INgxComplexCsv[]
  >(null);
  readonly $parsed: Observable<INgxComplexCsv[]> = this.parsed.asObservable();
  constructor() {}
  parse(file: File): void {
    const reader = new FileReader();
    console.log(file);
    reader.readAsText(file, 'utf-8');

    reader.onload = () => {
      const csvData = reader.result;
      const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
      const headersRow = this.getHeaderArray(csvRecordsArray);
      const dataArray = this.getDataArray(csvRecordsArray.splice(1));

      const result: INgxComplexCsv[] = [];
      for (let i = 1; i < dataArray.length; i++) {
        const row: INgxComplexCsv = {};
        for (let j = 0; j < headersRow.length; j++) {
          row[headersRow[j]] = dataArray[i][j];
        }
        result.push(row);
      }
      this.parsed.next(result);
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
