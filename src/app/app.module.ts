import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileParserModule } from 'projects/ngx-file-parser/src/public-api';
import { CsvParsedComponent } from './views/csv-parsed/csv-parsed.component';
import { JsonParsedComponent } from './views/json-parsed/json-parsed.component';

@NgModule({
  declarations: [AppComponent, CsvParsedComponent, JsonParsedComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxFileParserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
