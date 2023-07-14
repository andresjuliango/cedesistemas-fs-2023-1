const orderService = require('./orders.service');
const Order = require('./models/orders.model');
const clotheService = require('../clothes/clothes.service')

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
}

const add = async (req, res) => {
  try {
    const orderData = req.body;
    const {idUser} = req.payload;

    console.log('orderData',orderData.data.clotheId);
    console.log('idUser',idUser);


    //Obtiene los datos de la prenda
    const clotheRes = await clotheService.getDetail(orderData.data.clotheId);
    const clotheStatus = clotheRes.clothe.status;

    if (clotheStatus === CLOTHES_STATUS.FOR_SALE){
      orderData.sellerId = clotheRes.clothe.sellerId;
      orderData.status = ORDER_STATUS.ACTIVE

      if (buyerId === clotheRes.clothe.sellerId){
        throw error.handled ? error : errorHandler(dictErrors.EQUAL_SELLER_BUYER)
      } else {

        orderData.price = clotheRes.clothe.price;

        const response = await orderService.add(orderData, buyerId);

        const clotheRes = await clotheService.changeStatus(orderData.clotheId, CLOTHES_STATUS.SOLD);

        res.status(200).json(response);

      }

    }
  } catch (error) {
    res.status(error.status).json(error.response)
  }

};

const getAll = async (req, res) => {
  try {
    const filters = req.query;
    const response = await orderService.getAll(filters);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getDetail = async (req, res) => {
  try {
    const { id: orderId } = req.params;
    const response = await orderService.getDetail(orderId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getMySales = async (req, res) => {
  try {
    const {idUser} = req.payload;
    const response = await orderService.getMySales(idUser);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getMyShopping = async (req, res) => {
  try {
    const {idUser} = req.payload;
    const response = await orderService.getMyShopping(idUser);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  getMySales,
  getMyShopping
}
