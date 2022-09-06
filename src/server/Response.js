const { ServerResponse } = require('node:http')
const status = require('./status')

class Response extends ServerResponse {
  status = (code) => {
    this.statusCode = status[code].code
    this.statusMessage = status[code].message
    return this
  }

  send = (text) => {
    this.setHeader('Content-Type', 'plain/text')
    this.end(text)
  }

  json = (data) => {
    this.setHeader('Content-Type', 'application/json')
    this.end(JSON.stringify(data))
  }

  error = (code, message) => {
    let error = status[code]
    if (message) error.message = message
    this.status(code)
    this.json({
      ok: false,
      error: error
    })
  }
}

module.exports = Response
