function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high]; // 选择最后一个数作为pivot
  // 用于存储最后一个更小值的位置，方便位置移动一位得到一个更大值与迭代过程中的更小值交换
  let i = low - 1;
  for (let j = low; j < high; j++) {
    // 找到一个更小值，将前一个更小值位置移动一位交换
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // 迭代过程中，大于等于pivot的值不用做操作
  }
  // 迭代结束后，交换基准值与较小值位置后一位的指定值
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// === 测试
let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
quickSort(arr, 0, arr.length - 1);
quickSort(arr2, 0, arr2.length - 1);
console.log(arr);
console.log(arr2);
