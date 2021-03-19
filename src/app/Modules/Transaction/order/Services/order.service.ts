import { Injectable } from '@angular/core';
import { Order } from '../Models/order.model';
import { OrderItem } from '../../order-items/Models/order-item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    public formdata: Order;
    orderItems: OrderItem[];
    constructor(private http:HttpClient) { }


  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

    // saveOrUpdateOrder() {
    //   debugger;
    //   var body = {
    //     ...this.formdata,
    //     OrderItems: this.orderItems
    //   };
    //   return this.http.post(environment.apiURL + '/Order/AddOrder', body);
    // }

    saveOrUpdateOrder(){
      var body = {
        ...this.formdata,
        OrderItems: this.orderItems
      };
      debugger;
      return this.http.post(environment.apiURL + '/Order/AddOrder',  body, this.headers).pipe();
    }

    // saveOrUpdateOrder(): Observable<Order> {
    //   var body = {
    //     ...this.formdata,
    //     OrderItems: this.orderItems
    //   };
    //   return this.http.post<Order>(environment.apiURL + '/Order/AddOrder', body, this.headers).pipe();
    // }



    // getOrderList() {
    //   return this.http.get(environment.apiURL + '/Order').toPromise();
    // }

    getOrderList() {
      return this.http.get(environment.apiURL + '/Order/GetOrder', this.headers).pipe();
    }

    // getOrderByID(id:number):any {
    //   return this.http.get(environment.apiURL + '/Order/'+id).toPromise();
    // }

    getOrderByID(id: number):any {
      return this.http.get(environment.apiURL + '/Order/GetOrderByid/'+ id.toString(), this.headers).pipe();
    }







}



