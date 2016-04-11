import alt from '../alt';
import OrderListActions from '../actions/OrderListActions';

class OrderListStore {
  constructor() {
    this.bindActions(OrderListActions);
    this.orders = [];
  }

  onGetOrdersSuccess(data) {
    this.orders = data;
  }

  onGetOrdersFail(jqXhr) {
    console.info(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(OrderListStore);