import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";


describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AuthenticationComponent, 
        LoginComponent,
        RegisterComponent
       ],
       imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create authentication component', () => {
    expect(component).toBeTruthy();
  });

  it('should define the app-login component',()=>{
    expect(LoginComponent).toBeDefined();
  });

  it('should define the app-register component',()=>{
    expect(RegisterComponent).toBeDefined();
  });

  it('should render login component when auth type is login', () => {
    component.authType = 'login';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-login')).nativeElement).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-login')).nativeElement.hidden).toBe(false);
  });

  it('should render register component when auth type is register', () => {
      component.authType = 'register';
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('app-register')).nativeElement).toBeTruthy();
      expect(fixture.debugElement.query(By.css('app-register')).nativeElement.hidden).toBe(false);
  });

  it('should toggle for the login component when clicked on login',()=>{
    expect(fixture.debugElement.query(By.css('auth-link--active'))).toBeDefined();
    let buttonLogin = fixture.debugElement.query(By.css('.auth-links__login a'));
    expect(fixture.debugElement.query(By.css('app-login'))).not.toBeNull(); //by default login is rendered
    buttonLogin.triggerEventHandler('click',<Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-login'))).not.toBeNull();
  });

  it('should toggle for the register component when clicked on register',()=>{
    expect(fixture.debugElement.query(By.css('auth-link--active'))).toBeDefined();
    let buttonRegister = fixture.debugElement.query(By.css('.auth-links__register a'));
    expect(fixture.debugElement.query(By.css('app-register'))).toBeNull();
    buttonRegister.triggerEventHandler('click',<Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-register'))).not.toBeNull();
  });

});
