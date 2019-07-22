import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../config';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(url.domainurl + 'getemployees');
  }

  addEmployee(newEmployee: any) {
    return this.http.post(url.domainurl + 'addemployee', newEmployee);
  }

  deleteEmployee(id: any) {
    return this.http.delete(url.domainurl + 'deleteemployee/' + id);
  }
}
