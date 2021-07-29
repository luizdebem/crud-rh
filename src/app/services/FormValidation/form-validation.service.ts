import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isDateGreaterThanToday(control: FormControl) {
    const input = control.value
    if (input) {
      const inputDate = moment(input);
      const today = moment(moment().format('YYYY-MM-DD'));
      return inputDate.isAfter(today) ? {greater_than_today: true} : null;
    }
  }
}
