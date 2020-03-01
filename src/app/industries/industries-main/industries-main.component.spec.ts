import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesMainComponent } from './industries-main.component';

describe('IndustriesMainComponent', () => {
  let component: IndustriesMainComponent;
  let fixture: ComponentFixture<IndustriesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
