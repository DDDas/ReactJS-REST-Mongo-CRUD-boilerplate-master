'use strict'

var Order = require('./order.schema'); 
// NodeJS does not support import/export till now
module.exports = class OrderService {
    constructor() {
    	// Bind the functions to class
        this.saveOrder = this.saveOrder.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.getOrderById = this.getOrderById.bind(this);
    }

	saveOrder(req, res){
		var newOrder = new Order({
	              orderId: req.body.orderId,
	              orderName: req.body.orderName,
	              billAmount: req.body.billAmount,
	              paid: true,
	              random: [Math.random(), 0]
	            });
			newOrder.save(function(err) {
	        if (err) return next(err);
	        res.send({ message: ' Order has been added successfully!' });
	    });
	}

	getOrders(req, res){
	    Order
        .find()
        .exec(function(err, orders) {
          if (err) return next(err);
          if(!orders){
          	return res.status(404).send({ message: 'No Orders Found.' });
          }
          res.send(orders);
        });
	}

	getOrderById(req, res){
	    var id = req.params.id;

		  Order.findOne({ orderId: id }, function(err, order) {
		    if (err) return next(err);

		    if (!order) {
		      return res.status(404).send({ message: 'Order not found.' });
		    }

		    res.send(order);
		  });
	}

} 