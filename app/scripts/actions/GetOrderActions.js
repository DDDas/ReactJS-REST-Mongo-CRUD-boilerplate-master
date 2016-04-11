import alt from '../alt';

class GetOrderActions {
   constructor() {
    this.generateActions(
      'getOrderSuccess',
      'getOrderFail'
    );
  }

  getOrderById(orderId) {
    $.ajax({ url: 'http://localhost:4730/orders/'+orderId})
      .done((data) => {
        this.actions.getOrderSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getOrderFail(jqXhr);
      });
  }
}

export default alt.createActions(GetOrderActions);