const express = require('express');
const router = express.Router();
const clothesCtrl = require('./clothes.controller');
const authVerify = require('../../middlewares/authVerify');
const authOptional = require('../../middlewares/authOptional');

//Se indica en la petición que debe pasar primero por el middleware,
//indica también que ya es privada, se valida el usuario para
//realizar la acción
router.post('/add', authVerify,clothesCtrl.add);
router.get('/', authOptional, authVerify,clothesCtrl.getAll); //getAll
router.get('/detail/:id',clothesCtrl.getDetail); //get Detail

//------------------------------------------------------------------------------
router.get('/myStuff', authVerify,clothesCtrl.getMyStuff); //get prendas del usuario (propias)
//------------------------------------------------------------------------------

router.patch('/status/:id',clothesCtrl.changeStatus); // *
router.put('/:id', authVerify,clothesCtrl.update); // Es de tarea

module.exports = router;
