const http = require('node:http')

const PORT = process.env.PORT || 3000
const STATUS_OK = 200

const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHeader(STATUS_OK, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({ ok: true }))
})

server.listen(PORT)
console.log(`Listening on Port ${PORT}`)

