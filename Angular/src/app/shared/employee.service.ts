import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from './employee.model'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
selectedEmployee:Employee;
employees:Employee[];
readonly baseURL='http://localhost:3000/employees'

  constructor(private httpClient : HttpClient) { }

  postEmployee(emp:Employee){
    return this.httpClient.post(this.baseURL,emp);
  }

  getEmployeeList(){
    return this.httpClient.get(this.baseURL);
  }

  putEmployee(emp:Employee){
    return this.httpClient.put(this.baseURL + '/'+emp._id,emp);
  }

  deleteEmployee(emp:Employee){
    return this.httpClient.delete(this.baseURL + '/'+emp._id);
  }

}
