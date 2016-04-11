import React from 'react';
import {Link} from 'react-router';
import OrderListStore from '../stores/OrderListStore';
import OrderListActions from '../actions/OrderListActions';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = OrderListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    OrderListStore.listen(this.onChange);
    OrderListActions.getOrders();
  }

  componentWillUnmount() {
    OrderListStore.unlisten(this.onChange);
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