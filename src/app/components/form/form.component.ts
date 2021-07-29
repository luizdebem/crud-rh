import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
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

  constructor(private fb: FormBuilder, private router: Router, private customValidation: FormValidationService) { }

  ngOnInit(): void { }

  get fc(): any {
    return this.employeeForm.controls;
  }

  submitForm(): void {
    this.submitted = true;
    if (this.employeeForm.invalid) return;
  }

  cleanForm(): void {
    this.employeeForm.reset();
    this.submitted = false;
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
