'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const bugsnag = require('bugsnag')

class BugsnagProvider extends ServiceProvider {
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    this.app.singleton('Perafan/Bugsnag', () => {
      const apiKey = Config.get('bugsnag.apiKey')
      bugsnag.register(apiKey)
      return bugsnag
    })
  }

  * boot () {
    this.app.alias('Perafan/Bugsnag', 'Bugsnag')
  }
}

module.exports = BugsnagProvider
