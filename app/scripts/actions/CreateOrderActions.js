import alt from '../alt';

class CreateOrderActions {
  constructor() {
    this.generateActions(
      'updateOrderId',
      'updateOrderName',
      'updateBillAmount'
    );
  }

  createOrder(orderId, orderName, billAmount) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:4730/orders',
      data: { orderId: orderId, orderName: orderName, billAmount: billAmount }
    })
  }
}

export default alt.createActions(CreateOrderActions);