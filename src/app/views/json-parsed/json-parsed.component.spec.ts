import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParsedComponent } from './json-parsed.component';

describe('JsonParsedComponent', () => {
  let component: JsonParsedComponent;
  let fixture: ComponentFixture<JsonParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonParsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
