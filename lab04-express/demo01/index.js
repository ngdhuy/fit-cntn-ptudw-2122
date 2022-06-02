const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('Hello world, Express is here!!!')
})

app.post('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('[POST], Express is here!!!')
})

app.put('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('[PUT], Express is here!!!')
})

app.delete('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('[DELETE], Express is here!!!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})