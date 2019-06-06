// 给Array实现一个方法,去重后返回重复的字符(新数组)
Array.prototype.extraChar = function() {
  let result = []
  this.forEach((item, index) => {
    // 向前往后查找一遍和从后往前查找一遍,不等就是没有重复
    // 还要判断result数组有没有重复
    if (
      this.indexOf(item) !== this.lastIndexOf(item) &&
      result.indexOf(item) === -1
    ) {
      // 如果重复
      result.push(item)
    }
  })
  // end forEach
  return result
}

let arr = [1, 6, 8, 3, 7, 9, 2, 7, 2, 4, 4, 3, 3, 1, 5, 3]
console.log(arr.extraChar()) //  // [1, 3, 7, 2, 4]
