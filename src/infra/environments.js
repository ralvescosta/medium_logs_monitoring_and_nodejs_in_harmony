const dotEnv = require('dotenv')

class Environments {
  static config () {
    const env = process.env.NODE_ENV || 'development'
    dotEnv.config({ path: `.env.${env}` })
  }
}

module.exports = { Environments }
