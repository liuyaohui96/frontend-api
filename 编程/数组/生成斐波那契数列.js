// 生成一个包含的 n 项斐波那契数列元素的数组
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )

console.log(fibonacci(5))

// 根据截至的数字生成斐波那契数组
const fibonacciUntilNum = num => {
  let n = Math.ceil(
    Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2)
  )
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
}
fibonacciUntilNum(10) // [ 0, 1, 1, 2, 3, 5, 8 ]
