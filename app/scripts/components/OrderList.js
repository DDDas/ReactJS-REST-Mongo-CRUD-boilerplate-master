import React from 'react';
import {Link} from 'react-router';
import OrderAppStore from '../stores/OrderAppStore';
import OrderAppActions from '../actions/OrderAppActions';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = OrderAppStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    OrderAppStore.listen(this.onChange);
    OrderAppActions.getOrders();
  }

  componentWillUnmount() {
    OrderAppStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

   render() {
    let orderList = this.state.orders.map((order) =>{
      return (
      <div key={order.orderId} className='list-group-item'>
          <div className='media'>
            <div>
              <Link to={'/orders/' + order.orderId}>
                  {order.orderId}
              </Link>
                  {order.orderName}
                  {order.billAmount}
            </div>
          </div>
        </div>
        );
    });

    return (
        <div className='list-group'>
          {orderList}
        </div>
    );
  }
}

export default OrderList;