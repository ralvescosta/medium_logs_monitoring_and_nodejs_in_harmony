const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

class Server {
  constructor (logger) {
    this._server = express()
    this._port = process.env.PORT || 3333
    this._logger = logger
  }

  registerRoutes (routes) {
    this._server.use(routes)
  }

  configServer () {
    this._server.use(express.json())
    this._server.use(cors())
    this._server.use(helmet())
    this._server.use(compression())

    this._server.get('/health', (_, res) => {
      res.json({ health: true, time: new Date().toISOString() })
    })
  }

  start () {
    this._server.listen(this._port, () => {
      this._logger.info(`Server Running on port: ${this._port}`)
    })
  }

  globalErrorHandler () {
    this._server.use((err, req, res, _) => {
      this._logger.error({ method: req.method, statusCode: 500, path: req.path })
      this._logger.error({ trace: err.stack })
      return res.status(500).json({ statusCode: 500, message: 'Some internal error occur, try again later!' })
    })
  }
}

module.exports = { Server }
