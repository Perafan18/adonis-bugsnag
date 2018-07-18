'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(path.join(__dirname, 'stubs/bugsnag.js'), path.join(cli.helpers.configPath(), 'bugsnag.js'))
    cli.command.completed('create', 'config/bugsnag.js')
  } catch (error) {
    console.log(error)
  }
}
