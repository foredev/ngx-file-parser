import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FileButtonComponent } from './components/file-button/file-button.component';

@NgModule({
  declarations: [FileButtonComponent],
  imports: [MatButtonModule, MatIconModule],
  exports: [FileButtonComponent],
})
export class NgxFileParserModule {}
