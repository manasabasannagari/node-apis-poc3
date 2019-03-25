import { Component } from '@angular/core';
import {EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees: { name: string; email: string; password: string };

  constructor(private employeeService: EmployeesService) {
    this.employeeService.getEmployees()
      .subscribe((employees: any) => this.employees = employees);
  }
}
