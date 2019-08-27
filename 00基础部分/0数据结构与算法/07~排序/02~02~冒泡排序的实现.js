function bubbleSort(arr) {
  let flag = true; // 判断是否有序，有序则退出
  // 第一个元素到第n-1个元素
  for (let end = arr.length - 1; end > 0 && flag; end--) {
    flag = false;
    for (let i = 0; i < end; i++) {
      // i元素的关键字大于i+1元素的关键字，则交换
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        flag = true;
      }
    }
  }
}

let arr = [3, 2, 8, 7];
bubbleSort(arr);
console.log(arr); // [2, 3, 7, 8]
