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

  addEmployee(newEmployee: any): Observable<any> {
    return this.http.post(url.domainurl + 'addemployee', newEmployee);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(url.domainurl + 'deleteemployee/' + id);
  }

  getEmployeeByID(id: any): Observable<any> {
    return this.http.get(url.domainurl + 'getemployee/' + id);
  }

  updateEmployeeByID(id: any, updateEmployee: any): Observable<any> {
    return this.http.put(url.domainurl + 'updateemployee/' + id, updateEmployee);
  }

}
