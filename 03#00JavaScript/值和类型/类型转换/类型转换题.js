console.log([] + []) // ''
console.log([] + {}) // '[object Object]'
console.log(true + true) // 2
console.log(1 + { a: 1 }) // '1[object Object]'

const a = [1, 2, 3]
const b = [1, 2, 3]
const c = '1,2,3'

console.log(a == c) // true
console.log(a == b) // false 比较的是引用
