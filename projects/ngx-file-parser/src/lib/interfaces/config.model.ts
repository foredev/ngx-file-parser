import { INgxCsv } from './csv.interface';
import { INgxJson } from './json.interface';
import { INgxComplexCsv } from './complex-csv.interface';

export class NgxFileParserConfig {
  /**
   * Text to be displayed on the main button
   * Defaults to 'Choose files'
   */
  btnText?: string;
  /**
   * Material icon to be displayed on the main button
   * Defaults to 'backup'
   */
  btnIcon?: string;
  /**
   * Style to button Basic | Raised | Stroked | Icon | Flat | Fab | Mini-fab
   * Defaults to raised
   */
  btnColor?: BUTTON_COLORS;
  /**
   * File name extensions to be accepted to process
   * Supported file extensions: .csv
   * Defaults to .csv
   */
  accepts?: SUPPORTED_FILES[];
  /**
   * If true then a json object is returnered with headers as prop names
   * Defaults to false
   */
  csvNamedProperties?: boolean;
}
export type SUPPORTED_FILES = '.csv' | '.json';
export type SUPPORTED_RETURN_OBJECTS = INgxJson | INgxCsv | INgxComplexCsv[];
export type BUTTON_COLORS = '' | 'primary' | 'warn' | 'accent';
