import { Injectable } from '@angular/core';
import { NgxParser } from './parser.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { INgxJson } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class JsonParserService implements NgxParser<INgxJson> {
  private parsed: BehaviorSubject<INgxJson> = new BehaviorSubject<INgxJson>(
    null
  );
  readonly $parsed: Observable<INgxJson> = this.parsed.asObservable();

  constructor() {}
  parse(file: File): void {
    const reader = new FileReader();

    reader.readAsText(file, 'UTF-8');

    reader.onload = () => {
      const json = reader.result as string;
      try {
        const parsedJson = JSON.parse(json);
        this.parsed.next({ json: parsedJson } as INgxJson);
      } catch (error) {}
    };
  }
}
