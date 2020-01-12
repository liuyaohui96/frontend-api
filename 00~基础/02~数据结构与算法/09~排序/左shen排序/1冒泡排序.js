/*
比对 (0, 1) (1, 2) (2, 3), ...(n-2, n-1)
一次比对完n-1索引位置是正确的，从0-n-2开始
*/

function bubbleSort(arr) {
  // 数组长度小于2，直接返回
  if (arr.length < 2) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      // 前一个数 大于后一个数，则交换
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
}

/* 更加通俗易懂的 */
function bubbleSort2(arr) {
  if (arr.length < 2) return;

  for (let end = arr.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
  }
}

let arr = [3, 9, 8, 7, 1];
let arr2 = [2, 5, 3, 6, 9];
bubbleSort(arr);
bubbleSort2(arr2);
console.log(arr);
console.log(arr2);
