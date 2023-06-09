const mongoose = require('mongoose');
const errorHandler = require('../../utils/errorHandler');
const dictErrors = require('./utils/dict.errors')
const Clothe = require('./models/clothes.model');

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
}

const add = async (clotheData, sellerId) => {
  try {
    clotheData.sellerId = sellerId;
    const clothe = Clothe(clotheData);
    await clothe.save();
    return {
      message: 'Clothe created',
      clothe
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}

const getAll = async (filter) => {
  try {
    const query = {
      status: CLOTHES_STATUS.FOR_SALE
    };

    //Si llega datos para el filtro se agregan
    if (filter.gender) query.gender = filter.gender;
    if (filter.target) query.target = filter.target;
    if (filter.minPrice && filter.maxPrice) {
      query.price = { $gte: filter.minPrice, $lte: filter.maxPrice }
    };
    // Filtro para buscar un texto dentro del nombre de la prenda. Analogia del Like ('')
    // "i" no case sensitive
    if (filter.name) query.name = { $regex: filter.name, $options: "i"};
    if (filter.excludeSeller) query.sellerId = { $ne: filter.excludeSeller };

    const clothes = await Clothe.find(query);
    return {
      clothes
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const getDetail = async (clotheId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(clotheId)){
      throw errorHandler(dictErrors.CLOTHE_NOT_FOUND)
    }
    const clothe = await Clothe.findById(clotheId);
    if (clothe) return clothe;
    throw errorHandler(dictErrors.CLOTHE_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const getMyStuff = async (idUser) => {
  try {
    //console.log('idUser',idUser);
    const query = {
      sellerId: idUser
    };

    console.log('query',query);

    const clothes = await Clothe.find(query);
    return {
      clothes
    }
    throw errorHandler(dictErrors.CLOTHE_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
};

const changeStatus = async (clotheId, statusId) => {
  try {
    const query = { _id: clotheId };
    const update = {
      $set: {status: statusId}
    };
    const result = await Clothe.updateOne(query, update);
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
  getMyStuff
}
