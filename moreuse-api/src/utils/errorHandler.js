//errorDataExtra si se quiere extender con más información del error
const errorHandler = (errorData, errorDataExtra = {}) => {
  const response = { ...errorDataExtra, message: errorData.message}
  return {
    status: errorData.status,
    response,
    handled: true,
  }
}

module.exports = errorHandler;
