import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileParserModule } from 'projects/ngx-file-parser/src/public-api';
import { CsvParsedComponent } from './views/csv-parsed/csv-parsed.component';
import { JsonParsedComponent } from './views/json-parsed/json-parsed.component';
import { ComplexCsvParsedComponent } from './views/complex-csv-parsed/complex-csv-parsed.component';
import { ConfigComponent } from './views/config/config.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CsvParsedComponent,
    JsonParsedComponent,
    ComplexCsvParsedComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxFileParserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
