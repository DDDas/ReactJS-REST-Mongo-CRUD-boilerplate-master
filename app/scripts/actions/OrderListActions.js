import alt from '../alt';
import {assign} from 'underscore';

class OrderListActions {
   constructor() {
    this.generateActions(
      'getOrdersSuccess',
      'getOrdersFail'
    );
  }

  getOrders() {
    $.ajax({ url: 'http://localhost:4730/orders'})
      .done((data) => {
        this.actions.getOrdersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getOrdersFail(jqXhr);
      });
  }
}

export default alt.createActions(OrderListActions);