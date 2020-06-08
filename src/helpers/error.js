
class CustomError extends Error {
  constructor ({
    statusCode = 500,
    message = 'Erro Interno',
    type = 'internal_error',
  } = {}) {
    super(message)
    this.statusCode = statusCode
    this.type = type
  }
}

const handleError = (err, res) => {
  const { statusCode, message, type } = err
  return res.status(statusCode).json({
    message,
    type,
  })
}

module.exports = {
  CustomError,
  handleError,
}
