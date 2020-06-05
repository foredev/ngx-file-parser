import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexCsvParsedComponent } from './complex-csv-parsed.component';

describe('ComplexCsvParsedComponent', () => {
  let component: ComplexCsvParsedComponent;
  let fixture: ComponentFixture<ComplexCsvParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexCsvParsedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexCsvParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
