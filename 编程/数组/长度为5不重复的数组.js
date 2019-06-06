// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
/*
伪代码描述：
1. 生成一个arr[],长度为5则输出
2. 生成整数rand，约束范围2-32，如果不重复，则填入

*/
function makeArray(arr = []) {
  if (arr.length >= 5) return arr
  let rand = Math.floor(Math.random() * 31 + 2)
  if (arr.indexOf(rand) === -1) {
    arr.push(rand)
  }
  return makeArray(arr)
}

console.log(makeArray())
