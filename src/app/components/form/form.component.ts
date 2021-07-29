import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
    cpf: [null, Validators.required],
    birthdate: [null, Validators.required],
    role: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  submitForm(): void {
    if (this.employeeForm.invalid) return alert("Todos os campos são obrigatórios.");
  }

  cleanForm(): void {
    this.employeeForm.reset();
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
