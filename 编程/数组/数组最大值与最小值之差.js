let arr = [1, 10, 11, -1, '-5', 12, 13, 14, 15, 2, 3, 4, 7, 8, 9]

function MaxMinPlus(arr) {
  return Math.max(...arr) - Math.min(...arr)
}

console.log(MaxMinPlus(arr)) // 20
