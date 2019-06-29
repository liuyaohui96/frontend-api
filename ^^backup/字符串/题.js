var a = []
a.push(1, 2) // [1, 2]
a.shift(3, 4) // [1]
a.concat([5, 6]) // 不改变原数组
a.splice(0, 1, 2) // [2]

console.log(a) // [2]
