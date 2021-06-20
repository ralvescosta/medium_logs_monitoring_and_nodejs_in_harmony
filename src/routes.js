const { Router } = require('express')
const { routesAdapt } = require('./infra/adapters/express_route_adapt')
const { Logger } = require('./infra/logger')

const { HelloWorldController } = require('./controllers/hello_world_controller')
const { HelloWorldUsecase } = require('./app/hello_world_usecase')

const routes = Router()
const logger = Logger.getInstance().lg

const helloWorldUsecase = new HelloWorldUsecase()
const helloWorldController = new HelloWorldController(helloWorldUsecase)
routes.get('/hello', routesAdapt(logger, helloWorldController.get.bind(helloWorldController)))
routes.get('/hello-bad-request', routesAdapt(logger, helloWorldController.index.bind(helloWorldController)))
routes.get('/hello-error', routesAdapt(logger, helloWorldController.err.bind(helloWorldController)))

module.exports = routes
