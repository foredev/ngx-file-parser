# ngx-file-parser

Simple component to parse

- CSV

To be implemented: XML, JSON....

See demo - [https://fore.dev](https://fore.dev)

## Installation

#### 1.

With NPM
`npm install ngx-file-parser --save`

With Yarn
`yarn add ngx-file-parser`

#### 2.

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

Declare NgxFileParserConfig object to provide to the directive

#### `NgxFileParserConfig` has the following properties

| Property   | Description                             | Default     |
| ---------- | --------------------------------------- | ----------- |
| btnText    | Text to be displayed on button          | Choose file |
| btnIcon    | Material icon to be displayed on button | backup      |
| btnColor\* | Color accent to the button              | white       |
| accepts    | Array of file name extensions           | ['.csv']    |

\*See [Angular Material buttons for accents](https://material.angular.io/components/button/overview)

# Example

```ts
import { NgxFileParserConfig } from "ngx-file-parser";

ngxFileParserConfig: NgxFileParserConfig = {
  btnText: "Upload",
  btnIcon: "backup",
  btnColor: "primary",
  accepts: [".csv"],
};
```

Use the ngx-file-btn directive and provide the needed config object and event listener function to handle the parsed object

```html
<ngx-file-btn
  [(config)]="ngxFileParserConfig"
  (parsedFile)="handleParsedFile($event)"
></ngx-file-btn>
```

All parsed object is returned as INgxResult with the extension and result object and is emitted to this event listener with the \$event containing the parsed object

```html
(parsedFile)="handleParsedFile($event)"
```

```ts
export interface INgxResult {
  extension: string;
  result: INgxCsv | INgxJson;
}
```

# CSV

Returns the interface `INgxCsv` with properties
| Property | Description |
| -------- | ----------------|
| headers | Array of strings |
| data | Array of arrays of string |

Handle the callback:

```ts
  handleParsedFile(parsedFileObj: INgxResult) {
    this.parsedFileCsv = parsedFileObj.result as INgxCsv;
  }
```

# JSON

Returns the interface `INgxJson` with the properties that are definied in the upload JSON file

```ts
  handleParsedFile(parsedFileObj: INgxResult) {
    this.parsedFileJson = parsedFileObj.result as INgxJson;
  }
```

## Contribute

TODO

## License

TODO
