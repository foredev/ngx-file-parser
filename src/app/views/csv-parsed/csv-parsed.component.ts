import { Component, OnInit, Input } from '@angular/core';
import { INgxCsv } from 'projects/ngx-file-parser/src/public-api';

@Component({
  selector: 'app-csv-parsed',
  templateUrl: './csv-parsed.component.html',
  styleUrls: ['./csv-parsed.component.scss'],
})
export class CsvParsedComponent implements OnInit {
  @Input() csv: INgxCsv;
  constructor() {}

  ngOnInit(): void {}
}
