//Diccionario de errores
const dictErrors = {
  USER_PASS_WRONG: {
    status: 404,
    message: 'User o password wrong'
  },
  USER_ALREADY_EXISTS: {
    status: 409,
    message: "User already exists"
  },
  USER_NOT_FOUND: {
    status: 404,
    message: 'User not found'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'Server internal error'
  }
}

module.exports = dictErrors;
