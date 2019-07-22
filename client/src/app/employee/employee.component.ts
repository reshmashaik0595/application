import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employees: employee[];
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((list: any) => {
      this.employees = list;
    })
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      let index = this.employees.findIndex(i => i._id === id);
      this.employees.splice(index, 1);
    })
  }

  addEmployee() {
    const newEmployee: any = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.employeeService.addEmployee(newEmployee).subscribe(employee => {
      this.employees.push(newEmployee);
      this.first_name = null;
      this.last_name = null;
      this.phone = null;
    })
  }

}
