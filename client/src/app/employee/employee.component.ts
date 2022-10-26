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
  initialButton: string = "Add Employee";
  currentEmployeeID: any = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((list: any) => {
      this.employees = list;
    })
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      console.log("EMPLOYEE DELETE RESPONSE: ", response)
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
      console.log("EMPLOYEE ADDED RESPONSE: ", employee);
      this.first_name = null;
      this.last_name = null;
      this.phone = null;
      this.employeeService.getEmployees().subscribe((list: any) => {
        this.employees = list;
      })
    })
  }

  editEmployee(id: any) {
    this.employeeService.getEmployeeByID(id).subscribe(employee => {
      console.log("EMPLOYEE GET RESPONSE: ", employee);
      this.first_name = employee[0].first_name;
      this.last_name = employee[0].last_name;
      this.phone = employee[0].phone;
      this.initialButton = "Update Employee";
      this.currentEmployeeID = id;
    })
  }

  updateEmployee() {
    const updateEmployee: any = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }

    this.employeeService.updateEmployeeByID(this.currentEmployeeID, updateEmployee).subscribe(employee => {
      console.log("EMPLOYEE UPDATE RESPONSE: ", employee);
      this.first_name = null;
      this.last_name = null;
      this.phone = null;
      this.employeeService.getEmployees().subscribe((list: any) => {
        this.employees = list;
        this.initialButton = "Add Employee";
      })
    })
  }

  clear() {
    this.first_name = null;
    this.last_name = null;
    this.phone = null;
    this.initialButton = "Add Employee";
  }

}
