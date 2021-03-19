import { OrderService } from './Services/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Order } from './Models/order.model';
// import {OrderItem} from '../../shared/order-item.model';
// import { OrderItemsComponent } from '../order-items/order-items.component';
import { CustomerService } from 'src/app/Modules/MasterData/Customer/Services/customer.service';
import { Customer } from 'src/app/Modules/MasterData/Customer/Models/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderItemsComponent } from '../order-items/order-items.component';

// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  data: Order;
  customerList: Customer[];
  isValid: boolean = true;
  message: string;
  title: string;
  constructor(
    public service: OrderService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.title = 'فاتورة بيع';
    let orderID = this.currentRoute.snapshot.paramMap.get('id');
    this.customerList = [];
    if (orderID == null) this.resetForm();
    else {
      //#region Org
      // this.service.getOrderByID(parseInt(orderID)).then(res => {

      //   this.service.formdata = res.order;
      //   this.service.orderItems = res.orderDetails;
      // });
      //#endregion
      debugger;
      this.service.getOrderByID(parseInt(orderID)).subscribe((res) => {
        debugger;
        this.service.formdata = res.order;

        this.service.orderItems = res.orderDetails;
      });
    }

    this.customerService.getCustomerList().subscribe(
      (res) => {
        debugger;
        this.customerList = res;
      },
      (ex) => {
        console.log(ex);
      }
    );
  }

  resetForm(editForm?: NgForm) {
    debugger;
    // if (editForm == null)
    // editForm.resetForm();
    this.service.formdata = {
      orderID: 100,
      orderNo: '1000',
      customerID: 0,
      pMethod: '',
      gTotal: 0,
    };
    this.service.orderItems = [];
  }
  AddOrEditOrderItem(orderItemIndex, OrderID) {
    debugger;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog
      .open(OrderItemsComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.updateGrandTotal();
      });
  }
  onDeleteOrderItem(orderItemID: number, i: number) {
    this.service.orderItems.splice(i, 1);
    this.updateGrandTotal();
  }
  updateGrandTotal() {
    this.service.formdata.gTotal = this.service.orderItems.reduce(
      (prev, curr) => {
        return prev + curr.total;
      },
      0
    );
    this.service.formdata.gTotal = parseFloat(
      this.service.formdata.gTotal.toFixed(2)
    );
  }
  validateForm() {
    this.isValid = true;
    if (this.service.formdata.customerID == 0) this.isValid = false;
    else if (this.service.orderItems.length == 0) this.isValid = false;
    return this.isValid;
  }

  onSubmit(form?: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrUpdateOrder().subscribe((res) => {
        this.resetForm();
        this.message = 'تم التسجيل  بنبجاح';
       // this.toastr.success('Submitted Successfully', 'Restaurent App.');
       // this.router.navigate(['orders']);
      });
    }
  }
}
