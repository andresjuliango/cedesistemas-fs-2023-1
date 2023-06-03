const clothesService = require('./clothes.service');
const Clothe = require('./models/clothes.model');

const add =  async (req, res) => {
  try {
    const clotheData = req.body;
    const {idUser} = req.payload;
    const response = await clothesService.add(clotheData, idUser);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getAll =  async (req, res) => {
  try {
    // Como es un get se envian los filtros como query params
    const filters = req.query;
    if (req.payload?.idUser) filters.excludeseller = req.payload.idUser;
    const response = await clothesService.getAll(filters)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getDetail =  async (req, res) => {
  try {
    // renombra un atributo, el id como clotheId
    const {id: clotheId } = req.params;
    const response = await clothesService.getDetail(clotheId)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const getMyStuff =  async (req, res) => {
  try {
    const {idUser} = req.payload;
    const response = await clothesService.getMyStuff(idUser)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const changeStatus =  async (req, res) => {
  try {
    const {id: clotheId } = req.params;
    const {statusId} = req.query;
    const response = await clothesService.changeStatus(clotheId, statusId)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

const update =  async (req, res) => {
  try {
    const response = await null
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
};

module.exports = {
  add,
  getAll,
  getDetail,
  getMyStuff,
  changeStatus,
  update
}
