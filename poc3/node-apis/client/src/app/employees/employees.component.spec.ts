import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {EmployeesService} from "../services/employees.service";
import {By} from "@angular/platform-browser";

class MockEmployeeService  {
  employees = {
    name : 'tibco',
    email:'tibco@gmail.com',
    password:'123456'
  };
  getEmployees(){
    return this.employees;
  }
}

describe('EmployeeComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let service : MockEmployeeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      imports:[HttpClientTestingModule],
      providers:[EmployeesService, MockEmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    service = new MockEmployeeService();

  });

  it('should create the employee component', () => {
    expect(component).toBeTruthy();
  });

  it('should check for the keys present in the service',()=>{
    let data = service.getEmployees();
    expect(Object.keys(data)).toContain('name');
    expect(Object.keys(data)).toContain('email');
    expect(Object.keys(data)).toContain('password');
    expect(data).toEqual(jasmine.objectContaining({
      email:'tibco@gmail.com'
    }));
    expect(Object.keys(data).length).toEqual(3);
  });

  it('should check the employees displayed',()=>{
    // component.employees = service.getEmployees();
    // fixture.detectChanges();
    // let ele = fixture.debugElement.query(By.css('.employee-card')).nativeElement;
    //console.log(ele.innerText);
    //expect(ele.employees.name.innerText).toContain(['tibco']);
    console.log(fixture.debugElement.query(By.css('.employee-card')).nativeElement);
  });

});
