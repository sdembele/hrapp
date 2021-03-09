import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Personne } from './Personne';


@Injectable({
  providedIn: 'root'
})
export class EmployexeService {
  private employeesUrl = 'https://xe.sitechgroupe.com:8443/ords/iamexpress/hr/employees/';
  private employeeUrl = 'https://xe.sitechgroupe.com:8443/ords/iamexpress/hr/employees/';
  employee_item : any;

  constructor(private http : HttpClient) { }

  getEmpDetail(id) {
    var empurl = this.employeeUrl+id;
    console.log('url = '+empurl);
    return new Promise((resolve, reject) => {
        this.http.get(empurl).subscribe(data => {
          this.employee_item = data;
          resolve(this.employee_item); 
      }, (error) => {reject(error)} )
    });

  }

  getListOfEmployees() {
    console.log('Je suis getListOfEmployees');
    return new Promise((resolve, reject) => {
        this.http.get(this.employeesUrl).subscribe(data => {
          this.employee_item = data;
          resolve(this.employee_item); 
      }, (error) => {reject(error)} )
    });

  }



  getListOfEmployees1() {
    console.log('Je suis getListOfEmployees1');
    return this.http.get(this.employeesUrl);
  }

  getListOfEmployees3() {
    console.log('Je suis getListOfEmployees3');
    return  of((resolve, reject) => {
        this.http.get(this.employeesUrl).subscribe(data => {
          this.employee_item = data;
          resolve(this.employee_item); 
      }, (error) => {reject(error)} )
    });

  }

  addEmployee(payload:Personne){
    return this.http.post('',payload).subscribe(return_val => {
      this.employee_item = return_val;
    });
  }

}
