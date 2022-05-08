/**
 * * Access file system with nodejs
 */

'use strict'

const http = require('http')
const fs = require('fs')

const host = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('data.json', {encoding: 'utf-8', flag: 'r'}, (err, data) => {
    if(err != null) {
      console.error(err);
    } else {
      res.writeHead(200, {'Content-type': 'text/json'})
      res.write(data)
      return res.end()
    }
  })
  
})

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`)
})