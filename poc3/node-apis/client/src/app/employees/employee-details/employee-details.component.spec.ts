import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have p tag with employee details', () => {
    const bannerElement: HTMLElement = fixture.debugElement.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p.textContent).toContain('employee-details works!');
  });
});
