import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Modules/Transaction/order/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderList;
  constructor(private service: OrderService
    , private router: Router) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    //#endregion Org
       //this.service.getOrderList().then(res => this.orderList = res);
    //#region
    this.service.getOrderList().subscribe((res) => {
      this.orderList = res;
    });
  }
  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }

}
