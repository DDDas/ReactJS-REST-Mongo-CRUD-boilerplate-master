import React from 'react';
import OrderAppStore from '../stores/OrderAppStore';
import OrderAppActions from '../actions/OrderAppActions';
import InputField from './InputField';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = OrderAppStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    var fieldValue = event.target.value;
    var fieldName = event.target.name;
    this.state.order[fieldName] = fieldValue;
    OrderAppActions.updateOrder(this.state.order);
  }

    render() {
    return (
      <div>
           <div>
              <label>Order Id</label>
              <InputField name='orderId' value={this.props.order.orderId} handleChange={this._onChange}/>
            </div>
            <div>
              <label>Order Name</label>
              <InputField name='orderName' value={this.props.order.orderName} handleChange={this._onChange}/>
            </div>
            <div>
              <label>Billing Amount</label>
              <InputField name='billAmount' value={this.props.order.billAmount} handleChange={this._onChange}/>
            </div>
            <div>
              <label>Order Type</label>
              <InputField name='orderType' value={this.props.order.orderType} handleChange={this._onChange}/>
            </div>
            <div>
              <label>Payment Type</label>
              <InputField name='paymentType' value={this.props.order.paymentType} handleChange={this._onChange}/>
            </div>
            <div>
              <label>Delivery Type</label>
              <InputField name='deliveryType' value={this.props.order.deliveryType} handleChange={this._onChange}/>
            </div>
            <button type='submit' className='btn btn-primary' onClick={this.props.onSubmit}>Submit</button>
          
      </div>
    );
  }
}

export default OrderForm;