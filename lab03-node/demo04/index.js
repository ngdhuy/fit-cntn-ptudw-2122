/**
 * * Access file on server
 */

'use strict'

const http = require('http')
const fs = require('fs')

const host = 'localhost'
const port = 8000

// Load data
const loadData = () => {
  const data = fs.readFileSync('data.json', {encoding:'utf-8', flag:'r'}, (err, data) => {
    if(err) {
      console.error(err)
    } else {
      return data
    }
  })
  return JSON.parse(data)
}

const saveData = (products) => {
  try {
    fs.writeFileSync('data.json', JSON.stringify(products), {encoding:'utf-8', flag:'w'}, () => {
      console.log("File is saved")
    })
  } catch (err) {
    console.error(err)
  }
}

var products = loadData()

const apiGet = (req, res) => {
  if(products == null) {
    res.writeHead(400, {'Content-type':'text/html'})
    res.end('Cannot access file on Server')
  } else {
    res.writeHead(200, {'Content-type':'text/json'})

    var id = req.url.substr(1)
    console.log(id)
    if(id === '') {
      res.write(JSON.stringify(products))
    } else {
      products.forEach(product => {
        if(product.id == id)
          res.write(JSON.stringify(product))
      })
    }
    res.end()
  }
}

const apiPost = (req, res) => {
  try {
    let reqBodyData = ''

    req.on('data', (data) => {
      reqBodyData += data
    })

    req.on('end', () => {
      let product = JSON.parse(reqBodyData)
      products.push(product)
      saveData(products)
    })

    res.writeHead(200, {'Content-type':'text/html'})
    res.end('Create new item is SUCCESS')
  } catch (err) {
    console.error(err)
    res.writeHead(500, {'Content-type':'text/html'})
    res.end('Cannot create new Product')
  }
}

const apiPut = (req, res) => {
  try {
    let reqBodyData = ''

    req.on('data', (data) => {
      reqBodyData += data
    })

    req.on('end', () => {
      let product = JSON.parse(reqBodyData)
      products.forEach(item => {
        if(product.id == item.id) {
          item.name = product.name
          item.price = product.price
        }
      })
      
      saveData(products)
    })

    res.writeHead(200, {'Content-type':'text/html'})
    res.end('Create new item is SUCCESS')
  } catch (err) {
    console.error(err)
    res.writeHead(500, {'Content-type':'text/html'})
    res.end('Cannot create new Product')
  }
}

const apiDelete = (req, res) => {
  try {
    let reqBodyData = ''

    req.on('data', (data) => {
      reqBodyData += data
    })

    req.on('end', () => {
      let product = JSON.parse(reqBodyData)
      for(let i = 0; i < products.length; i++) {
        if(products[i].id == product.id) {
          products.splice(i, 1)
        }
      }
      saveData(products)
    })

    res.writeHead(200, {'Content-type':'text/html'})
    res.end('Create new item is SUCCESS')
  } catch (err) {
    console.error(err)
    res.writeHead(500, {'Content-type':'text/html'})
    res.end('Cannot create new Product')
  }
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  
  switch(req.method) {
    case "GET":
      apiGet(req, res)
      break
    case "POST":
      apiPost(req, res)
      break
    case "PUT":
      apiPut(req, res)
      break
    case "DELETE":
      apiDelete(req, res)
      break
  }
})

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`)
})