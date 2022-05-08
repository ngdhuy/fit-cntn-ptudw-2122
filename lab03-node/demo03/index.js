/**
 * * Read and access query string from url
 */

'use strict'

var http = require('http')
var fs = require('fs')
var url = require('url')

const host = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('content.html', {encoding: 'utf-8', flag: 'r'}, (err, data) => {
    let query = url.parse(req.url, true).query
    console.log(query)
    
    if(err) {
      console.error(err)
    } else {
      res.writeHead(200, {'Content-type': 'text/html'})
      res.write(data)
      return res.end()
    }
  })
})

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`)
})