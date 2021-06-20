const pino = require('pino')

class Logger {
  constructor () {
    this.lg = pino({
      enabled: process.env.ENABLE_LOG === 'true',
      level: process.env.LOG_LEVEL
    })
  }

  static getInstance () {
    if (!this._instance) {
      this._instance = new Logger()
    }

    return this._instance
  }
}

module.exports = { Logger }
