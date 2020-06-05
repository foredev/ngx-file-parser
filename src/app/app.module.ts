import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileParserModule } from 'projects/ngx-file-parser/src/public-api';
import { CsvParsedComponent } from './views/csv-parsed/csv-parsed.component';

@NgModule({
  declarations: [AppComponent, CsvParsedComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxFileParserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
