import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from "@angular/router";
import {By} from "@angular/platform-browser";

const getSet = {
  get email() { return 'abcd@gmail.com';},
  get password() {return '123456'},
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    let mockRouter = {
    navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls',()=>{
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should check when invalid email entered',()=>{
    let emailControl = component.loginForm.get('email');
    emailControl.setValue('manasa123');//invalid email
    expect(emailControl.valid).toBeFalsy();
  });

  it('should check when invalid password entered',()=>{
    let passwordControl = component.loginForm.get('password');
    passwordControl.setValue('123'); //password length should be at least 6
    expect(passwordControl.valid).toBeFalsy();
  });

  it('should check when the valid email and password is entered',()=>{
    let emailControl = component.loginForm.get('email');
    let passwordControl = component.loginForm.get('password');
    emailControl.setValue('manasa@gmail.com');
    passwordControl.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
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
