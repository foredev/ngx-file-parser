import { Component, OnInit, Input } from '@angular/core';
import { INgxJson } from 'projects/ngx-file-parser/src/public-api';

@Component({
  selector: 'app-json-parsed',
  templateUrl: './json-parsed.component.html',
  styleUrls: ['./json-parsed.component.scss'],
})
export class JsonParsedComponent implements OnInit {
  @Input() json: INgxJson;
  constructor() {}

  ngOnInit(): void {}
}
