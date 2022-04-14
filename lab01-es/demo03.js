'use strict'

console.clear()

// ? Data type
let n = 10        // number
let s = "hello"   // string
let u             // undefine
let n_obj = null  // null
let arr = [1, 2, 3] // array -> object
let obj = {
  id  : 1, 
  name: 'iphone'
}                 // object (json)

// ? Function
function sum(a, b) {
  return a + b
}

console.log(sum(1, 2))
console.log(sum(1, '2'))


// ? Anonymous function
const say_hello = function() {
  console.log("hello world!!!")
}

say_hello()

// ? Arrow function
const say_no = () => {
  console.log("No, I don't!")
}

say_no()

const double_value = a => a * 2;
console.log(double_value(10)); 

// ? pass by value
const swap_1 = (a, b) => {
  console.log(`inside: a = ${a}, b = ${b}`)
  let temp = a
  a = b
  b = temp
  console.log(`inside: a = ${a}, b = ${b}`)
}

let a = 10
let b = 20

console.log(`a = ${a}, b = ${b}`)
swap_1(a, b)
console.log(`a = ${a}, b = ${b}`)

// ? pass by reference
console.log('--------------------')

const swap_2 = (c, d) => {
  console.log(`inside: c = ${c.value}, d = ${d.value}`)
  let temp = c.value
  c.value = d.value
  d.value = temp
  console.log(`inside: c = ${c.value}, d = ${d.value}`)
}

let c = { value: 66 };
let d = { value: 88 };
console.log(`c = ${c.value}, d = ${d.value}`)
swap_2(c, d);
console.log(`c = ${c.value}, d = ${d.value}`)