import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/Employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  @Input() employeeList = [];

  ngOnInit(): void {
  }

  viewEmployee(employee) {
    this.router.navigate(['form'], { state: { action: 'view', employee } });
  }

  editEmployee(employee) {
    this.router.navigate(['form'], { state: { action: 'edit', employee } });
  }

  async deleteEmployee(id) {
    try {
      await this.employeeService.deleteEmployeeById(id).toPromise();
      this.employeeList = this.employeeList.filter((employee) => employee.id !== id);
    } catch (error) {
      alert('Ocorreu um erro ao excluir o colaborador :(');
      console.error(error);
    }
  }

}
