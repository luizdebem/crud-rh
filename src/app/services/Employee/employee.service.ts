import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URI: string = "http://localhost:3001/employees";

  constructor(
    private http: HttpClient
  ) { }

  listEmployees() {
    return this.http.get(this.URI);
  }

  createEmployee(employee) {
    return this.http.post(this.URI, employee);
  }

  editEmployee(id, data) {
    return this.http.patch(`${this.URI}/${id}`, data);
  }

  deleteEmployeeById(id) {
    return this.http.delete(`${this.URI}/${id}`);
  }
}
