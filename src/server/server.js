const http = require('node:http')
const Response = require('./Response')
const Router = require('./Router')
const status = require('./status')

const server = http.createServer({
  ServerResponse: Response
})

server.router = new Router()
server.get = (path, handler) => server.router.handle('GET', path, handler)
server.post = (path, handler) => server.router.handle('POST', path, handler)
server.put = (path, handler) => server.router.handle('PUT', path, handler)
server.delete = (path, handler) => server.router.handle('DELETE', path, handler)

server.on('request', async (req, res) => {
  return await server.router.processRequest(req, res)
})

module.exports = server
