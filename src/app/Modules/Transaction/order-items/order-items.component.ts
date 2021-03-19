import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { OrderItem } from 'src/app/Modules/Transaction/order-items/Models/order-item.model';
import { ItemService } from 'src/app/Modules/Transaction/Item/Services/item.service';
import { OrderService } from 'src/app/Modules/Transaction/order/Services/order.service';
import { Item } from 'src/app/Modules/Transaction/Item/Models/item.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList:Item[];
  isValid: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<OrderItemsComponent>,
  private itemService:ItemService,
  private orderSevice: OrderService ) { }
  divLangName: string;

  ngOnInit() {

    debugger;
    //#region Old
     // this.itemService.getItemList().then(res => this.itemList = res  as Item[]);
    //#region
this.ChangeLang();

    this.itemList = [];
    this.itemService.getItemList().subscribe(
      (res) => {
        debugger;
        this.itemList = res;
      },
      (ex) => {
        console.log(ex);
      }
    );


    if(this.data.orderItemIndex==null)
    this.formData = {
      orderItemID: 1,
      orderID: this.data.OrderID,
      itemID: 0,
      itemName: '',
      price: 0,
      quantity: 0,
      total: 0
    }
    else
      this.formData= Object.assign({}, this.orderSevice.orderItems[this.data.orderItemIndex]);
  }
  updatePrice(ctrl)
  {
    debugger;
    if (ctrl.selectedIndex == 0) {
      this.formData.price = 0;
       this.formData.itemName = '';
    }
    else {
      this.formData.price = this.itemList[ctrl.selectedIndex - 1].price;
       this.formData.itemName = this.itemList[ctrl.selectedIndex - 1].name;
    }
     this.updateTotal();

  }
  updateTotal()
  {
   this.formData.total=parseFloat((this.formData.quantity*this.formData.price).toFixed(2));
  }
  onSubmit(form:NgForm)
  {
    if(this.validateForm(form.value))
    {
      if(this.data.orderItemIndex==null)
       this.orderSevice.orderItems.push(form.value);
       else
       this.orderSevice.orderItems[this.data.orderItemIndex]=form.value;
    this.dialogRef.close();
    }
  }
  validateForm(formData: OrderItem) {
    this.isValid = true;
    if (formData.itemID == 0)
      this.isValid = false;
    else if (formData.quantity == 0)
      this.isValid = false;
    return this.isValid;
  }
  ChangeLang() {
    var getLang = sessionStorage.getItem('lang');
    if (getLang === 'ar')
      this.divLangName = 'main ar';
    else
      this.divLangName = 'main';
  }

}
