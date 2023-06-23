const express = require('express');
const router = express.Router();
const orderCtrl = require('./orders.controller');
const authVerify = require('../../middlewares/authVerify');

router.post('/add', authVerify, orderCtrl.add);
router.post('/', authVerify, orderCtrl.getAll);
router.get('/detail/:id', authVerify, orderCtrl.getDetail);
router.get('/sales', authVerify, orderCtrl.getMySales);
router.get('/shopping', authVerify, orderCtrl.getMyShopping);

module.exports = router;
