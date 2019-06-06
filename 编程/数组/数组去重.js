function nonDup(arr) {
  let result = new Set(arr)
  return [...result]
}

// 将不再result的加到result中
function nonDup2(arr) {
  let result = []
  arr.forEach(item => {
    if (result.indexOf(item) === -1) result.push(item)
  })
  return result
}

// 将第一个等于该项的数组项 都返回
function nonDup3(arr) {
  let result = []
  return arr.filter((item, index) => index === arr.indexOf(item))
}

let arr = [1, 1, 2, 2, 3, 4, 4, 5]
console.log(nonDup(arr)) // [ 1, 2, 3, 4, 5 ]
console.log(nonDup2(arr)) // [ 1, 2, 3, 4, 5 ]
console.log(nonDup3(arr)) // [ 1, 2, 3, 4, 5 ]
