import React from 'react';
import OrderAppStore from '../stores/OrderAppStore';
import OrderAppActions from '../actions/OrderAppActions';
import OrderForm from './OrderForm';

class CreateOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = OrderAppStore.getState();
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    OrderAppStore.listen(this._onChange);
  }

  componentWillUnmount() {
    OrderAppStore.unlisten(this._onChange);
  }

  _onChange(state) {
    this.setState(state);
  }

  _handleSubmit(event) {
    if (this.state.order.orderId && this.state.order.orderName && this.state.order.billAmount) {
      OrderAppActions.createOrder(this.state.order);
    }

  }

  render() {
    return (
      <div className='container'>
         <OrderForm order={this.state.order} onSubmit={this._handleSubmit}/>
      </div>
    );
  }
}

export default CreateOrder;