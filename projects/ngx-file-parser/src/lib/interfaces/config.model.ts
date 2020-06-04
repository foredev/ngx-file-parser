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
  /**
   * If user should be have to ability to choose multiple files
   * Defaults to false
   */
  multiple?: boolean;
}
type SUPPORTED_FILES = '.csv';
