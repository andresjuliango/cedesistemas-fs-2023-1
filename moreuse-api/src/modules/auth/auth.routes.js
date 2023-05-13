const express = require('express');
const router = express.Router();
const authCtrl = require('./auth.controller'); // conecta con el controller


router.post('/login', authCtrl.login)
router.post('/logout', authCtrl.logout)
router.get('/', authCtrl.info)

module.exports = router
