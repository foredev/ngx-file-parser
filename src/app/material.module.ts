import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

const formImports = [ReactiveFormsModule, FormsModule];

const importModules = [
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
];

@NgModule({
  imports: [...importModules, ...formImports],
  exports: [...importModules, ...formImports],
})
export class MaterialModule {}
