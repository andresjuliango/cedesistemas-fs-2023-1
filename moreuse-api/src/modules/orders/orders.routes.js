const express = require('express');
const router = express.Router;
const ordersCtrl = require('./orders.controller');
const authVerify = require('../../middlewares/authVerify');

router.post('/add', authVerify, ordersCtrl.add);
router.post('/', authVerify, ordersCtrl.getAll)
router.get('/detail/:id', authVerify. ordersCtrl.getDetail);
router.get('/sales', authVerify, ordersCtrl.getMySales);
router.get('/shopping', authVerify, ordersCtrl, getMyShopping);

module.exports = router;
