import alt from '../alt';
import CreateOrderActions from '../actions/CreateOrderActions';

class CreateOrderStore {
  constructor() {
    this.bindActions(CreateOrderActions);
    this.orderId = '';
    this.orderName = '';
    this.billAmount = '';
  }

  onUpdateOrderId(event) {
    this.orderId = event.target.value;
  }

  onUpdateOrderName(event) {
    this.orderName = event.target.value;
  }

  onUpdateBillAmount(event) {
    this.billAmount = event.target.value;
  }

}

export default alt.createStore(CreateOrderStore);