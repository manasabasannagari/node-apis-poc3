import { EmployeesService } from './employees.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('Employee service', () => {
  let spyHttpService: jasmine.SpyObj<HttpClient>;
  let service: EmployeesService;

  beforeEach(() => {
    spyHttpService = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmployeesService(<any> spyHttpService);
  });

  it('should define the getEmployees method',()=>{
    expect(service.getEmployees).toBeDefined();
  });

  it('should fetch the employees with getEmployees() method', () => {
    const expectedEmployees =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    spyHttpService.get.and.returnValue(of(expectedEmployees));

    service.getEmployees().subscribe(employees => {
      expect(employees).toBe(expectedEmployees);
    });
    expect(spyHttpService.get.calls.count()).toBe(1, 'one call');
  });
});
