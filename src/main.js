const { Environments } = require('./infra/environments.js')
const { Server } = require('./infra/server.js')
const { Logger } = require('./infra/logger')

;(() => {
  Environments.config()

  const logger = Logger.getInstance().lg
  const server = new Server(logger)

  server.configServer()
  server.registerRoutes(require('./routes'))
  server.globalErrorHandler()

  server.start()
})()
