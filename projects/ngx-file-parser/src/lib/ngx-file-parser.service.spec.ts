import { TestBed } from '@angular/core/testing';

import { NgxFileParserService } from './ngx-file-parser.service';

describe('NgxFileParserService', () => {
  let service: NgxFileParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFileParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
