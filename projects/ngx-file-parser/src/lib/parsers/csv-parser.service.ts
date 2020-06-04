import { Injectable } from '@angular/core';
import { NgxParser } from './parser.interface';

@Injectable({
  providedIn: 'root',
})
export class CsvParserService implements NgxParser {
  constructor() {}
  parse(file: File): void {
    console.log('here');
  }
}
