const CustomAPIError = require('./Custom-api')
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 404
  }
}
module.exports = BadRequestError
