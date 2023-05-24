//Diccionario de errores
const dictErrors = {
  USER_PASS_WORNG: {
    status: 404,
    message: 'User o password wrong'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'Server internal error'
  }
}

module.exports = dictErrors;
