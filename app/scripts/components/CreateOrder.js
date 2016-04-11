import React from 'react';
import CreateOrderStore from '../stores/CreateOrderStore';
import CreateOrderActions from '../actions/CreateOrderActions';

class CreateOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = CreateOrderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CreateOrderStore.listen(this.onChange);
    this.refs.orderIdField.focus();
  }

  componentWillUnmount() {
    CreateOrderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    var orderId = this.state.orderId;
    var orderName = this.state.orderName;
    var billAmount = this.state.billAmount;

    if (orderId && orderName && billAmount) {
      CreateOrderActions.createOrder(orderId, orderName, billAmount);
    }
  }

  render() {
    return (
      <div className='container'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Order Id</label>
              <input type='text' className='form-control' ref='orderIdField' value={this.state.orderId}
                     onChange={CreateOrderActions.updateOrderId} autoFocus/>
            </div>
            <div>
              <label>Order Name</label>
              <input type='text' className='form-control' value={this.state.orderName}
                     onChange={CreateOrderActions.updateOrderName} autoFocus/>
            </div>
            <div>
              <label>Billing Amount</label>
              <input type='text' className='form-control' value={this.state.billAmount}
                     onChange={CreateOrderActions.updateBillAmount} autoFocus/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
      </div>
    );
  }
}

export default CreateOrder;