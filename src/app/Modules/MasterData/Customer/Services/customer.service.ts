import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../Models/customer.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  // getCustomerList(){
  //   debugger;
  //   return this.http.get(environment.apiURL+'/Customer/GetCustomers').toPromise();

  //  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiURL + '/Customer/GetCustomers', this.headers).pipe();
  }
}
