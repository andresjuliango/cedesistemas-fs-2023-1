const { json } = require('express')
const errorHandler = require('../../utils/errorHandler')
const { USER_PASS_WORNG, SERVER_ERROR } = require('./utils/dict.errors')

const login = (email, password) => {
  try {
    //Para probar error 500
    //throw ('ie exception')
    if (email === 'juan@gmail.com' && password === '123') {
      return {
        token: 'xhxhyxuxiosspakskldñf'
      }
    }
    //Devuelve un objeto, como una exception
    throw errorHandler(USER_PASS_WORNG, {'Info extra del error': 1, 'attr1': true, 'isAuth':false})
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR);
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const info = (idUser) => {
  return {
    name: 'Juan Perez',
    email: 'juan@gmail.com',
    address: 'Medellín',
    phone: '123454'
  }
}

module.exports = {
  login,
  logout,
  info
}
