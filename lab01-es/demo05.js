'use strict'

console.clear()

let products = [
  {
    id: 1,
    name: 'iPhone'
  }, 
  {
    id: 2, 
    name: 'ipad', 
    category: 'tablet'
  }, 
  3,
  [1, 2, 3],
  {
    id: 5, 
    name: 'macBook', 
    price: [
      1000,
      2000,
      5000
    ]
  }
]

console.log(products)
console.log(products[4].price[2])