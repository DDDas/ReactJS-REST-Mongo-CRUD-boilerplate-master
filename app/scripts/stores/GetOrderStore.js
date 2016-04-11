import alt from '../alt';
import GetOrderActions from '../actions/GetOrderActions';

class GetOrderStore {
  constructor() {
    this.bindActions(GetOrderActions);
    this.order = {};
  }

  onGetOrderSuccess(data) {
    this.order = data;
  }

  onGetOrderFail(jqXhr) {
    console.info(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(GetOrderStore);