import { Component, OnInit, Input } from '@angular/core';
import { INgxComplexCsv } from 'projects/ngx-file-parser/src/public-api';

@Component({
  selector: 'app-complex-csv-parsed',
  templateUrl: './complex-csv-parsed.component.html',
  styleUrls: ['./complex-csv-parsed.component.scss'],
})
export class ComplexCsvParsedComponent implements OnInit {
  @Input() csv: INgxComplexCsv[];
  constructor() {}

  ngOnInit(): void {}
}
