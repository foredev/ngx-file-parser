import { Observable } from 'rxjs';

export interface NgxParser<T> {
  parse: (file: File) => Observable<T>;
}
