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
}

module.exports = Response
