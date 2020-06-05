import { Observable } from 'rxjs';

export interface NgxParser<TRes> {
  $parsed: Observable<TRes>;
  parse: (file: File) => void;
}
