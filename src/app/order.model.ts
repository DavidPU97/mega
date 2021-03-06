export class Order {
    constructor(
		public PurchaseOrderId: number,
        public PurchaseOrderTypeId: number,
        public PurchaseOrderTypeAbbreviation: string,
        public PurchaseOrderTypeDescription: string,
        public PurchaseOrderNo: string,
        public PurchaseOrderReferenceNo: string,
        public PurchaseOrderReferenceApplication: string,
        public PurchaseOrderDate: Date,
        public PurchaseOrderCustomOrderDate1: Date,
        public PurchaseOrderCustomOrderDate2: Date,
        public PurchaseOrderCurrencyCode: string,
        public PurchaseOrderSupplierID: string,
        public PurchaseOrderAddress: string,
        public PurchaseOrderPickupAddress: string,
        public PurchaseOrderContactPerson: string,
        public PurchaseOrderInventoryLocationID: string,
        public PurchaseOrderCustomFlag1: boolean,
        public PurchaseOrderCustomFlag2: boolean,
        public PurchaseOrderCustomFlag3: boolean,
        public PurchaseOrderCustomFlag4: boolean,
        public PurchaseOrderCustomFlag5: boolean,
        public PurchaseOrderCustomFlag6: boolean,
        public PurchaseOrderCustomFlag7: boolean,
        public PurchaseOrderCustomFlag8: boolean,
        public PurchaseOrderCustomFlag9: boolean,
        public PurchaseOrderCustomFlag10: boolean,
        public PurchaseOrderComments: string,
        public PurchaseOrderTags: string,
        public PurchaseOrderPaymentTermsEnumeration: string,
        public PurchaseOrderTotalQuantity: number,
        public PurchaseOrderAmountSubtotalWithoutTaxAndDiscount: number,
        public PurchaseOrderAmountTotalDiscount: number,
        public PurchaseOrderAmountTotalTax: number,
        public PurchaseOrderAmountGrandTotal: number,
        public PurchaseOrderDetails: OrderDetail[],
        public PurchaseOrderStatus: string,
        public chkReOpenOrCloseRelatedDocs: boolean,
        public PurchaseOrderCreationDate: Date,
        public PurchaseOrderLastUpdatedDate: Date,
        public PurchaseOrderExpectedReceivingDateEarliest: Date,
        public PurchaseOrderExpectedReceivingDateLatest: Date,
	) {}
}
export class OrderDetail {
    constructor(
		    public PurchaseOrderRowDetailID: number,
        public PurchaseOrderRowProductID: number,
        public PurchaseOrderRowProductSKU: string,
        public PurchaseOrderRowProductDescription: string,
        public PurchaseOrderRowQuantity: number,
        public PurchaseOrderRowReceivedQuantity: number,
        public PurchaseOrderRowInvoicedQuantity: number,
        public PurchaseOrderRowUnitPriceWithoutTaxOrDiscount: number,
        public PurchaseOrderRowTaxID: number,
        public PurchaseOrderTotalTaxAmount: number,
        public PurchaseOrderRowDiscountID: number,
        public PurchaseOrderRowTotalDiscountAmount: number,
        public PurchaseOrderRowTotalAmount: number,
        public PurchaseOrderRowSerialNumbers: number[],
        public PurchaseOrderRowBatchNumbers: number[],
        public PurchaseOrderRowRemarks: string,
        public PurchaseOrderRowExpectedReceivingDateEarliest: Date,
        public PurchaseOrderRowExpectedReceivingDateLatest: Date,
	) {}
}