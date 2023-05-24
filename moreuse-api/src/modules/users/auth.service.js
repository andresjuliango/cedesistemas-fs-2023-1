const { json } = require('express')
const errorHandler = require('../../utils/errorHandler')
const User = require('./models/user.model')
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

const signup = async (userData) => {
  try {
    const user = User(userData);
    await user.save(); // -> insert_one({....}) // Lo que hace por debajo
    return {
      message: 'user created',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
  return {
    data: userData
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
  signup,
  info
}
