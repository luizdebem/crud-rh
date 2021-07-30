import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/Employee/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  async fetchEmployees(): Promise<void> {
    try {
      const res = await this.employeeService.listEmployees().toPromise() as Employee[];
      this.employeeList = res;
    } catch (error) {
      console.error('Error while fetching employees from backend.', error);
    }
  }

}
