import { Injectable } from '@angular/core';
import { SUPPORTED_FILES } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class NgxFileParserService {
  constructor() {}

  public validFile(file: File, accepts: SUPPORTED_FILES[]): boolean {
    const extIndex = file.name.lastIndexOf('.');
    const ext = file.name.substr(extIndex) as SUPPORTED_FILES;
    return accepts.includes(ext);
  }
  public getExtension(fileName: string): string {
    return fileName.substr(fileName.lastIndexOf('.'));
  }
}
