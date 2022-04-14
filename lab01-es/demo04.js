'use strict'

console.clear()

let arr_1 = Array(1, 2, 3)
console.log(arr_1)

let arr_2 = [4, 5, 6]
console.log(arr_2)

arr_2.push(99)
console.log(arr_2)

let t = arr_2.pop()
console.log(arr_2)
console.log(t)

arr_2.push(88, 22, 33)
console.log(arr_2)

arr_2.splice(3, 1)
console.log(arr_2)

arr_2.splice(3,1, [1, 2, 3])
console.log(arr_2)

arr_2.splice(3, 0, ...[44, 55, 66])
console.log(arr_2)