export class NgxFileButtonConfig {
  text?: string;
  icon?: string;
  accepts: SUPPORTED_FILES[];
  multiple?: boolean;
}
type SUPPORTED_FILES = '.csv';
