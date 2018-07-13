'use strict'

require('dotenv').load()
const test = require('japa')
const bugsnag = require('bugsnag')

test.group('Bugsnag', () => {
  test('configure and throw exception', async () => {
    const apiKey = process.env.BUGSNAG_API_KEY
    bugsnag.register(apiKey)
    try {
      let name = 'Pedro Perafán'

      if (name === 'Pedro Perafán') {
        throw new Error('Wrong! your name cannot be Pedro Perafán')
      }

      console.log(`My name is ${name}`)
    } catch (error) {
      bugsnag.notify(error)
      console.log('An exeption was thrown, go to app.bugsnag.com')
    }
  })
})
