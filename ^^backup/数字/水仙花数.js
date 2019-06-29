// 求100~999的所有"水仙花"数, 就是三位数中各数字的立方和等于自身

function threeWaterFlower(rangeStart, rangeEnd) {
  var temp = []
  for (let i = rangeStart; i <= rangeEnd; i++) {
    let numStr = i.toString().split('')
    Math.pow(numStr[0], 3) + Math.pow(numStr[1], 3) + Math.pow(numStr[2], 3) ==
    i
      ? temp.push(i)
      : ''
  }
  return temp
}

console.log(threeWaterFlower(100, 999))
