import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.baseURL}/employee`);
  }
}
