import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/Employee/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeList = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  async fetchEmployees(): Promise<void> {
    const res = await this.employeeService.listEmployees().toPromise() as any;
    this.employeeList = res;
  }

}
