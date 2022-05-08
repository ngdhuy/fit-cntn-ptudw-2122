const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('Hello world, Express is here!!!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})