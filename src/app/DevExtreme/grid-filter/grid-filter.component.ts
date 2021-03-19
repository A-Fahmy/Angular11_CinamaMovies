import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { GridFilter } from 'src/app/services/gridFilter.service';

let getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};
@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css'],
  providers: [GridFilter]
})
export class GridFilterComponent implements OnInit {
  dataSource: any;
  filterValue: Array<any>;
  customOperations: Array<any>;
  popupPosition: any;
  saleAmountHeaderFilter: any;

  constructor(service: GridFilter) {
    this.dataSource = new DataSource({
      store: service.getOrders()
  });
  this.popupPosition = { of: window, at: "top", my: "top", offset: { y: 10 } };
  this.filterValue = [
      ['Employee', '=', 'Clark Morgan'],
      'and',
      ['OrderDate', 'weekends']
  ];
  this.customOperations = [{
      name: "weekends",
      caption: "Weekends",
      dataTypes: ["date"],
      icon: "check",
      hasValue: false,
      calculateFilterExpression: function () {
          return [[getOrderDay, "=", 0], "or", [getOrderDay, "=", 6]];
      }
  }];

  this.saleAmountHeaderFilter = [{
      text: "Less than $3000",
      value: ["SaleAmount", "<", 3000]
  }, {
      text: "$3000 - $5000",
      value: [
          ["SaleAmount", ">=", 3000],
          ["SaleAmount", "<", 5000]
      ]
  }, {
      text: "$5000 - $10000",
      value: [
          ["SaleAmount", ">=", 5000],
          ["SaleAmount", "<", 10000]
      ]
  }, {
      text: "$10000 - $20000",
      value: [
          ["SaleAmount", ">=", 10000],
          ["SaleAmount", "<", 20000]
      ]
  }, {
      text: "Greater than $20000",
      value: ["SaleAmount", ">=", 20000]
  }];

   }
   onInitialized(e) {
    e.component.columnOption("SaleAmount", {
        editorOptions: {
            format: "currency",
            showClearButton: true
        }
    });
}

  ngOnInit(): void {
  }

}
