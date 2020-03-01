import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIndustryComponent } from './single-industry.component';

describe('SingleIndustryComponent', () => {
  let component: SingleIndustryComponent;
  let fixture: ComponentFixture<SingleIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
