# ngx-file-parser

[![npm version](http://img.shields.io/npm/v/ngx-file-parser.svg?style=flat)](https://npmjs.org/package/ngx-file-parser)

Simple component to parse files with extensions

- CSV
- JSON

To be implemented: XML....

See [demo](https://fore.dev)

## Dependencies

- [Angular](https://angular.io) >= 9.1.9
- [Angular Material](https://material.angular.io/) >= 9.2.4

## Installation

#### 1.

NPM:
`npm install ngx-file-parser --save`

Yarn:
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

| Property           | Description                                                                     | Default     |
| ------------------ | ------------------------------------------------------------------------------- | ----------- |
| btnText            | Text to be displayed on button                                                  | Choose file |
| btnIcon            | Material icon to be displayed on button                                         | backup      |
| btnColor\*         | Color accent to the button                                                      | transparent |
| accepts            | Array of file name extensions                                                   | ['.csv']    |
| csvNamedProperties | If parsed CSV file should be returned as array of objects with named properties | false       |

\*See [Angular Material buttons for accents](https://material.angular.io/components/button/overview)

# Example

```ts
import { NgxFileParserConfig } from "ngx-file-parser";

ngxFileParserConfig: NgxFileParserConfig = {
  btnText: "Upload",
  btnIcon: "backup",
  btnColor: "primary",
  accepts: [".csv"],
  csvNamedProperties: true,
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

#### `ngx-file-btn` has the following output events

| Event      | Description                    | Type       |
| ---------- | ------------------------------ | ---------- |
| parsedFile | The result of the parsed file. | INgxResult |
| processing | If the file is being processed | boolean    |

```ts
export interface INgxResult {
  extension: string;
  result: INgxCsv | INgxJson | INgxComplexCsv;
}
```

# Returns

Handle all 'parsedFile' responses by

```ts
  handleParsedFile(parsedFileObj: INgxResult) {
    this.parsedFile = parsedFileObj.result as INgxCsv | INgxJson | INgxComplexCsv;
  }
```

## CSV

Returns the interface `INgxCsv` with properties
| Property | Description |
| -------- | ----------------|
| headers | Array of strings |
| data | Array of arrays of string |

## CSV Named Properties

Returns the interface `INgxComplexCsv` with properties
| Property | Description |
| -------- | ----------------|
| [key: string]: string; | Property as definied in the upload CSV |

## JSON

Returns the interface `INgxJson` with the properties that are definied in the upload JSON file

# Contribute

All PR's, issues and contributors are welcome! Feel free to start contributing

## License

MIT
