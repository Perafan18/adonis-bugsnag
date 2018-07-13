# adonis-bugsnag

Bugsnag provider for AdonisJS

[![npm version](https://badge.fury.io/js/adonis-bugsnag.svg)](https://badge.fury.io/js/adonis-bugsnag)
[![Build status](https://ci.appveyor.com/api/projects/status/476ln8n8vb0vulgg/branch/master?svg=true)](https://ci.appveyor.com/project/Perafan18/adonis-bugsnag/branch/master)
[![GitHub license](https://img.shields.io/github/license/Perafan18/adonis-bugsnag.svg)](https://github.com/Perafan18/adonis-bugsnag/blob/master/LICENSE)


## Install

```bash
adonis install adonis-bugsnag
```

You need to add the provider to AdonisJS at `start/app.js`:

```javascript
const providers = [
   ...
   'adonis-bugsnag/providers/Bugsnag',
];
```

and in your `.env` file

```bash
BUGSNAG_API_KEY=
```

then you can use it as

```javascript
const bugsnag = use('Bugsnag')
```

if you want to catch all the exceptions of your adonis project you must create an exception handler

```bash
adonis make:ehandler
```

and we need add bugsnag notify in `app/Exceptions/Handler.js`

```javascript
'use strict'

const bugsnag = use('Bugsnag')

class ExceptionHandler {

  ...

  async report (error, { request }) {
    bugsnag.notify(error, {
      data: request.all(),
      headers: request.headers()
    })
  }
}

module.exports = ExceptionHandler

```

## Official documentation for Node.js apps

https://docs.bugsnag.com/platforms/nodejs/other/

## Issues & PR

It is always helpful if we try to follow certain practices when creating issues or PR's, since it will save everyone's time.

1. Always try creating regression tests when you find a bug (if possible).
2. Share some context on what you are trying to do, with enough code to reproduce the issue.
3. For general questions, please create a forum thread.
4. When creating a PR for a feature, make sure to create a parallel PR for docs too.

## License
Adonis Bugsnag is open-sourced software licensed under the MIT license.








