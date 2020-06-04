import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-file-btn',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss'],
})
export class FileButtonComponent implements OnInit {
  @Input() btnText: string = '';
  @Input() btnIcon: string = 'backup';
  constructor() {}

  ngOnInit(): void {}
}
