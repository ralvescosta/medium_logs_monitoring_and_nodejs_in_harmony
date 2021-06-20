const { right } = require('../shared/either')
class HelloWorldUsecase {
  getGreetings () {
    return right('Hello, World')
  }
}

module.exports = { HelloWorldUsecase }
