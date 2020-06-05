import { INgxCsv } from './csv.interface';

export class NgxFileButtonConfig {
  /**
   * Text to be displayed on the main button
   * Defaults to 'Choose files'
   */
  text?: string;
  /**
   * Material icon to be displayed on the main button
   * Defaults to 'backup'
   */
  icon?: string;
  /**
   * File name extensions to be accepted to process
   * Supported file extensions: .csv
   * Defaults to .csv
   */
  accepts: SUPPORTED_FILES[];
}
export type SUPPORTED_FILES = '.csv';
export type SUPPORTED_RETURN_OBJECTS = object | INgxCsv;
