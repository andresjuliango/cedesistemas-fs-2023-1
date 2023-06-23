const dictErrors = {
  ORDER_NOT_FOUND: {
    status: 404,
    message: 'Order not found'
  },
  EQUAL_SELLER_BUYER: {
    status: 404,
    message: 'Seller equals Buyer'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'Server internal error'
  }
};

module.exports = dictErrors;
