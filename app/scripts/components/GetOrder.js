import React from 'react';
import {Link} from 'react-router';
import GetOrderStore from '../stores/GetOrderStore';
import GetOrderActions from '../actions/GetOrderActions';

class GetOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = GetOrderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    GetOrderStore.listen(this.onChange);
    GetOrderActions.getOrderById(this.props.params.id);
  }

  componentWillUnmount() {
    GetOrderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

   render() {
    return (
        <div className='list-group-item'>
            {this.state.order.orderId}

            {this.state.order.orderName}

            {this.state.order.billAmount}
        </div>
    );
  }
}

export default GetOrder;