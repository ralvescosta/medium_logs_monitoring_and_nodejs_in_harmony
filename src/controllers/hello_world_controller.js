const { BaseController } = require('./base_controller')

class HelloWorldController extends BaseController {
  constructor (helloWorldUsecase) {
    super()
    this.helloWorldUsecase = helloWorldUsecase
  }

  get (_) {
    const result = this.helloWorldUsecase.getGreetings()

    if (result.isRight()) {
      return this.ok({ greeting: result.value })
    }
  }

  index (_) {
    return this.badRequest({ message: 'Something Wrong!' })
  }

  err (_) {
    throw new Error('OMG!')
  }
}

module.exports = { HelloWorldController }
