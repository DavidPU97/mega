import { Component, OnInit } from '@angular/core';
import mvPurchaseOrders from 'src/app/data.json';
import { Order, OrderDetail } from '../order.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
    
  orders: Order[] = [];
  tempOrderDetails: OrderDetail[] = [];
  
  selectedOrder:Order = null;


  ngOnInit(): void {
    console.log(mvPurchaseOrders);
    mvPurchaseOrders.mvPurchaseOrders.forEach((order:any) => {
      this.tempOrderDetails = [];
      order.PurchaseOrderDetails.forEach((orderDetail:any) => {
        this.tempOrderDetails.push(new OrderDetail(
          orderDetail.PurchaseOrderRowDetailID,
          orderDetail.PurchaseOrderRowProductID,
          orderDetail.PurchaseOrderRowProductSKU,
          orderDetail.PurchaseOrderRowProductDescription,
          orderDetail.PurchaseOrderRowQuantity,
          orderDetail.PurchaseOrderRowReceivedQuantity,
          orderDetail.PurchaseOrderRowInvoicedQuantity,
          orderDetail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount,
          orderDetail.PurchaseOrderRowTaxID,
          orderDetail.PurchaseOrderTotalTaxAmount,
          orderDetail.PurchaseOrderRowDiscountID,
          orderDetail.PurchaseOrderRowTotalDiscountAmount,
          orderDetail.PurchaseOrderRowTotalAmount,
          orderDetail.PurchaseOrderRowSerialNumbers,
          orderDetail.PurchaseOrderRowBatchNumbers,
          orderDetail.PurchaseOrderRowRemarks,
          new Date(parseInt(orderDetail.PurchaseOrderRowExpectedReceivingDateEarliest.substr(6))),
          new Date(parseInt(orderDetail.PurchaseOrderRowExpectedReceivingDateLatest.substr(6))),
          ));
      });
      this.orders.push(new Order(
        order.PurchaseOrderId,
        order.PurchaseOrderTypeId,
        order.PurchaseOrderTypeAbbreviation,
        order.PurchaseOrderTypeDescription,
        order.PurchaseOrderNo,
        order.PurchaseOrderReferenceNo,
        order.PurchaseOrderReferenceApplication,
        new Date(parseInt(order.PurchaseOrderDate.substr(6))),
        new Date(parseInt(order.PurchaseOrderCustomOrderDate1.substr(6))),
        new Date(parseInt(order.PurchaseOrderCustomOrderDate2.substr(6))),
        order.PurchaseOrderCurrencyCode,
        order.PurchaseOrderSupplierID,
        order.PurchaseOrderAddress,
        order.PurchaseOrderPickupAddress,
        order.PurchaseOrderContactPerson,
        order.PurchaseOrderInventoryLocationID,
        order.PurchaseOrderCustomFlag1,
        order.PurchaseOrderCustomFlag2,
        order.PurchaseOrderCustomFlag3,
        order.PurchaseOrderCustomFlag4,
        order.PurchaseOrderCustomFlag5,
        order.PurchaseOrderCustomFlag6,
        order.PurchaseOrderCustomFlag7,
        order.PurchaseOrderCustomFlag8,
        order.PurchaseOrderCustomFlag9,
        order.PurchaseOrderCustomFlag10,
        order.PurchaseOrderComments,
        order.PurchaseOrderTags,
        order.PurchaseOrderPaymentTermsEnumeration,
        order.PurchaseOrderTotalQuantity,
        order.PurchaseOrderAmountSubtotalWithoutTaxAndDiscount,
        order.PurchaseOrderAmountTotalDiscount,
        order.PurchaseOrderAmountTotalTax,
        order.PurchaseOrderAmountGrandTotal,
        this.tempOrderDetails,
        order.PurchaseOrderStatus,
        order.chkReOpenOrCloseRelatedDocs,
        new Date(parseInt(order.PurchaseOrderCreationDate.substr(6))),
        new Date(parseInt(order.PurchaseOrderLastUpdatedDate.substr(6))),
        new Date(parseInt(order.PurchaseOrderExpectedReceivingDateEarliest.substr(6))),
        new Date(parseInt(order.PurchaseOrderExpectedReceivingDateLatest.substr(6))),
      ))
    });

    console.log(this.orders);
  }

}
