# ngx-file-parser

Simple component to parse

- CSV

To be implemented: XML, JSON....

See demo - [https://fore.dev](https://fore.dev)

## Installation

With NPM
`npm install ngx-file-parser --save`

With Yarn
`yarn add ngx-file-parser`

Import the `NgxFileParserModule` to provide the necessary components and directives.

```ts
import { NgxFileParserModule } from 'ngx-file-parser';

@NgModule({
  ...
  imports: [ NgxFileParserModule ],
  ...
})
export class AppModule { }
```

## Usage

Declare ButtonConfig object to provide to the directive

NgxFileButtonConfig

- text : Text to be displayed on button. Defaults to 'Choose file'
- icon: Material icon to be displayed on button. Defaults to 'backup'
- accepts: Array of file name extensions. Defaults to ['.csv']

# Example

```ts
btnConfig: NgxFileButtonConfig = {
  text: "Upload",
  icon: "backup",
  accepts: [".csv"],
};
```

Use the ngx-file-btn directive and provide the needed ButtonConfig object and event listener function to handle the parsed object

```html
<ngx-file-btn
  [(btnConfig)]="btnConfig"
  (parsedFile)="handleParsedFile($event)"
></ngx-file-btn>
```
