const mongoose = require('mongoose');
const errorHandler = require('../../utils/errorHandler');
const dictErrors = require('./utils/dict.errors');
const Order = require('./models/orders.model');
const clotheService = require('../clothes/clothes.service');
const { query } = require('express');

const ORDER_STATUS = {
  ACTIVE: 1,
  PAID: 2,
  CANCELED: 3
};

const PAYMENT_TYPE = {
  CREDITCARD: 1,
  PSE: 2,
  TRANSFER: 3
};


const add = async (orderData, buyerId) => {
  try {
    orderData.buyerId = buyerId;
    const order = Order(orderData);

    await order.save();

    return {
      message: 'Order created',
      order
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
};

const getAll = async (filter) => {
  try {

    const query = {
      status: {$ne: ORDER_STATUS.CANCELED}
    }

    if (filter.sellerId) query.sellerId = filter.sellerId;
    if (filter.buyerId) query.buyerId = filter.buyerId;
    if (filter.status) query.status = filter.status;
    if (filter.paymentType) query.paymentType = filter.paymentType;
    if (filter.minPrice && filter.maxPrice) {
      query.price = { $gte: filter.minPrice, $lte: filter.maxPrice }
    }
    if (filter.minDate && filter.maxDate) {
      query.date = { $gte: filter.minDate, $lte: filter.maxDate }
    }

    const orders = await Order.find(query);
    return {
      orders
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const getDetail = async (orderId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)){
      throw errorHandler(dictErrors.ORDER_NOT_FOUND);
    }
    const order = await Order.findById(orderId);
    if (order) return order;
    throw errorHandler(dictErrors.ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const getMySales = async (idUser) => {
  try {
    const query = {
      sellerId: idUser,
      status: {$ne: ORDER_STATUS.CANCELED}
    };

    const orders = await Order.find(query);
    if (orders) return orders;
    throw errorHandler(dictErrors.ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const getMyShopping = async (buyerId) => {
  try {
    const query = {
      buyerId: buyerId,
      status: {$ne: ORDER_STATUS.CANCELED}
    };

    const orders = await Order.find(query);
    if (orders) return orders;
    throw errorHandler(dictErrors.ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const changeStatus = async (orderId, statusId) => {
  try {
    const query = { _id: orderId }
    const update = {
      $set: {status: statusId}
    };
    const result = await Order.updateOne(query, update);
    return {
      result
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  getMySales,
  getMyShopping
}
