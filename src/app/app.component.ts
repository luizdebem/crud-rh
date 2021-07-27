import { Component } from '@angular/core';
import { EmployeeService } from './services/Employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rh-crud';

  constructor(
    private employeeService: EmployeeService
  ) {}

  async ngOnInit() {
    const employees = await this.employeeService.listEmployees().toPromise();
    console.log(employees);
  }
}
