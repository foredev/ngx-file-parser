import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileParserComponent } from './ngx-file-parser.component';

describe('NgxFileParserComponent', () => {
  let component: NgxFileParserComponent;
  let fixture: ComponentFixture<NgxFileParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFileParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
