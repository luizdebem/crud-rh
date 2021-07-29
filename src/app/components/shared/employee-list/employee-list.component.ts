import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/Employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  @Input() employeeList = [];

  ngOnInit(): void {
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
