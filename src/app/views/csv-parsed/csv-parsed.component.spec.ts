import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvParsedComponent } from './csv-parsed.component';

describe('CsvParsedComponent', () => {
  let component: CsvParsedComponent;
  let fixture: ComponentFixture<CsvParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsvParsedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
