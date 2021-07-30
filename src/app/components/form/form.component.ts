import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FormActions } from 'src/app/enums/FormActions';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { FormValidationService } from 'src/app/services/FormValidation/form-validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  today = moment().format('YYYY-MM-DD');

  employeeForm = this.fb.group({
    id: [null, Validators.required],
    fullName: [null, Validators.required],
    nickname: [null, Validators.required],
    parentName: [null, Validators.required],
    otherParentName: [null, Validators.required],
    cpf: [null, [Validators.required, Validators.minLength(11)]],
    birthdate: [null, [Validators.required, this.customValidation.isDateGreaterThanToday]],
    role: [null, Validators.required]
  });

  submitted = false;

  isViewOnly = false;
  isEdit = false;
  employeeToBeEdited: any;

  constructor(private fb: FormBuilder, private router: Router,
    private customValidation: FormValidationService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const { employee, action } = history.state;

    if (employee && action) {
      if (action === FormActions.EDIT) {
        this.isEdit = true;
        this.fc.id.disable();
      }
  
      if (action === FormActions.VIEW) {
        this.isViewOnly = true;
        this.employeeForm.disable();
      }

      this.employeeToBeEdited = employee;
      this.employeeForm.setValue({...employee});
    }
  }

  get fc(): any {
    return this.employeeForm.controls;
  }

  async submitForm(): Promise<void> {
    this.submitted = true;
    if (this.employeeForm.invalid) return;

    const employee = {
      ...this.employeeForm.value
    }

    this.isEdit ? this.editEmployee(employee) : this.saveEmployee(employee);
  }

  async saveEmployee(employee) {
    try {
      await this.employeeService.createEmployee(employee).toPromise();
      alert('Colaborador cadastrado com sucesso.');
      this.cleanForm();
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o colaborador :(');
      console.error('Error on post request to /employees', error);
    }
  }

  async editEmployee(employee) {
    employee = {
      id: this.employeeToBeEdited.id,
      ...employee,
    }

    try {
      await this.employeeService.editEmployee(this.employeeToBeEdited.id, employee).toPromise();
      alert('Colaborador editado com sucesso.');
      this.router.navigate(['']);
    } catch (error) {
      alert('Ocorreu um erro ao editar o colaborador :(');
      console.error('Error on patch request to /employees', error);
    }
  }

  cleanForm(): void {
    this.employeeForm.reset();
    this.submitted = false;
    if (this.isEdit) {
      this.fc.id.setValue(this.employeeToBeEdited.id);
    }
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
