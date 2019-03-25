import {TestBed, inject, async} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {HttpTestingController} from "@angular/common/http/testing";

describe('AuthService', () => {
  let spyHttpService: jasmine.SpyObj<HttpClient>;
  let service: AuthService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports : [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    spyHttpService = jasmine.createSpyObj('HttpClient', ['post']);
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(()=>{
    httpMock.verify();
  });

  it('should create the Auth service', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should define a registerUser method',()=>{
    expect(service.registerUser).toBeDefined();
  });

  it('should define a loginUser method',()=>{
    expect(service.loginUser).toBeDefined();
  });

  it('should register a new user using registerUser method',()=>{
    let data = environment.baseURL;
    const dummyEmployee  = [{name:'abc',email:'abc@gmail.com',password:'123456'}];
    service.registerUser(data).subscribe(posts=>{
      expect(<Function>posts).toEqual(dummyEmployee);
    });
    let request = httpMock.expectOne(`${data}/auth/register`);
    expect(request.request.method).toBe('POST');
  });

  it('should provide user to login using loginUser method',()=>{
    let data = environment.baseURL;
    const dummyEmployee  = [{email:'abc@gmail.com',password:'123456'}];
    service.loginUser(data).subscribe(posts=>{
      expect(<Function>posts).toEqual(dummyEmployee);
    });
    let request = httpMock.expectOne(`${data}/auth/login`);
    expect(request.request.method).toBe('POST');
  });

  it('should check for the access token',()=>{
    const id = localStorage.setItem('JWT','abcd');
    expect(service.checkLogIn).toBeDefined();
   expect(localStorage.getItem('JWT')).toEqual('abcd');
   localStorage.removeItem('JWT');
  });


  it(`should expect a POST /auth/login to request email and password`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.post('/auth/login', {email:'manasa@gmail.com', password:'1234'}).subscribe();

      backend.expectNone((req: HttpRequest<any>) => {
        return req.method === 'PUT';
      });

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === '/auth/login'
          && req.method === 'POST'
          && req.body.email=== 'manasa@gmail.com'
          && req.body.password === '1234';
      });

    })));

  it(`should expect a POST /auth/register to expect name, email, password`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.post('/auth/register', {name:'manasa',email:'manasa@gmail.com', password:'1234'}).subscribe();

      backend.expectNone((req: HttpRequest<any>) => {
        return req.method === 'PUT';
      });

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === '/auth/register'
          && req.method === 'POST'
          && req.body.name ==='manasa'
          && req.body.email=== 'manasa@gmail.com'
          && req.body.password === '1234';
      });
    })));

    // it('should check for the authentication token using checkLogIn',()=>{
    //   expect(service.checkLogIn()).toBeDefined();
    //   const id = localStorage.setItem('JWT','abcd');
    //   spyOn(service,'checkLogIn').and.returnValue('false');
    //   service.checkLogIn().subscribe(()=>{
    //     return true;
    //   });
    //
    //   expect(service.checkLogIn).toBe('false');
    //   localStorage.removeItem('JWT');
    // });
});
