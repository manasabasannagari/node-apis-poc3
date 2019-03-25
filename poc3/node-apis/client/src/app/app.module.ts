import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './services/employees.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { httpInterceptorProviders } from './app.interceptors';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    RegisterComponent,
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'employees',
        component: EmployeesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: AuthenticationComponent
      },
      {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [httpInterceptorProviders, EmployeesService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
