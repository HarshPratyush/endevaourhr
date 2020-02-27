import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDetailsComponent } from './side-nav-details.component';

describe('SideNavDetailsComponent', () => {
  let component: SideNavDetailsComponent;
  let fixture: ComponentFixture<SideNavDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
