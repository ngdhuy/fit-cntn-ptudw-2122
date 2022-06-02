const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('Index pages')
})

app.get('/user', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('User pages')
})

app.get('/user/:id', (req, res) => {
  let id = req.params.id
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end(`user pages with id = ${id}`)
})

app.get('/user/:uid/book/:bid', (req, res) => {
  let uid = req.params.uid
  let bid = req.params.bid
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end(`user pages with user id = ${uid} and book id = ${bid}`)
})

app.get('/flights/:from-:to', (req, res) => {
  let from = req.params.from
  let to = req.params.to
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end(`The fights from ${from} to ${to} will being check-in`)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})