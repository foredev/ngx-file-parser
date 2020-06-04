import { Injectable } from '@angular/core';
import { NgxParser } from './parser.interface';
import { INgxCsv } from '../interfaces/csv.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvParserService implements NgxParser<INgxCsv> {
  constructor() {}
  parse(file: File): Observable<INgxCsv> {
    return of(null);
  }
}
