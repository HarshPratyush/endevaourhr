import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySelectorComponent } from './industry-selector.component';

describe('IndustrySelectorComponent', () => {
  let component: IndustrySelectorComponent;
  let fixture: ComponentFixture<IndustrySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
