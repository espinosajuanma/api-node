const app = require('./server/server')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ ok: true })
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(PORT)
console.log(`Listening on Port ${PORT}`)
