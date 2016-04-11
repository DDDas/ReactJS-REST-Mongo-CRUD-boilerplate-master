import React from 'react';
import {Route} from 'react-router';
import CreateOrder from './components/CreateOrder';
import Application from './components/Application';
import OrderList from './components/OrderList';
import OrderApp from './components/OrderApp';
import GetOrder from './components/GetOrder';

export default (
  <Route component={Application}>
    <Route path='/' component={OrderApp} />
    <Route path='/orders' component={OrderList} />
    <Route path='/orders/create' component={CreateOrder} />
    <Route path='/orders/:id' component={GetOrder} />
  </Route>
);
