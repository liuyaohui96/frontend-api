// 生成一个包含的 n 项斐波那契数列元素的数组
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : 1),
    []
  );

console.log(fibonacci(5));

// 根据截至的数字生成斐波那契数组
const fibonacciUntilNum = num => {
  let n = Math.ceil(
    Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2)
  );
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
};
fibonacciUntilNum(10); // [ 0, 1, 1, 2, 3, 5, 8 ]

// ========== 根据参数返回具体位置fabonacci 数
/**
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
  fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
  则getNthFibonacci(0)返回值为1
  则getNthFibonacci(4)返回值为5
 */

function getNthFibonacci(count) {
  const arr = createFibonacci(count + 1);
  return arr[count];
}

function createFibonacci(count) {
  return [...Array(count)].reduce(
    (prev, next, index) =>
      prev.concat(index > 1 ? prev[index - 1] + prev[index - 2] : 1),
    []
  );
}

console.log(getNthFibonacci(0));
console.log(getNthFibonacci(4));
