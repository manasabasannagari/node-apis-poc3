import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";

const getSet = {
  get email() { return 'abcd@gmail.com';},
  get password() {return '123456'},
};
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 controls',()=>{
    expect(component.registerForm.contains('name')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
  });

  it('should check when the invalid email and password', () => {
    let emailControl = component.registerForm.get('email'),
      passwordControl = component.registerForm.get('password');
    emailControl.setValue('manasa123');
    passwordControl.setValue('123');
    expect(emailControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();
  });

  it('should check when the valid email and password is entered',()=>{
    let emailControl = component.registerForm.get('email'),
      passwordControl = component.registerForm.get('password');
    emailControl.setValue('manasa@gmail.com');
    passwordControl.setValue('123456');
    expect(emailControl.valid).toBeTruthy();
    expect(passwordControl.valid).toBeTruthy();
  });

  it('should get the email using getter', () => {
    spyOnProperty(getSet, 'email', 'get').and.returnValue('abcd@gmail.com');
    expect(getSet.email).toBe('abcd@gmail.com');
  });

  it('should get the password using getter',()=>{
    spyOnProperty(getSet, 'password', 'get').and.returnValue('123456');
    expect(getSet.password).toBe('123456');
  });

  it('should check whether the submit button is clickable ',async(()=>{
    fixture.detectChanges();
    spyOn(component,'loginSubmit');
    let ele = fixture.debugElement.query(By.css('button')).nativeElement;
    ele.click();
    expect(component.loginSubmit).toHaveBeenCalledTimes(0);
  }));

});
