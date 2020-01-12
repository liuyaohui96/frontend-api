/* 
  将未排好的序列插入到已经排好的序列中
  0 是排好的序列
  1 和 0 比较，如果1位置比0位置小，交换， (0, 1) 是排好的
  2 和 1 比较，，如果2位置比1位置小，交换，然后 0 和 1 比较
*/

//改进
function insertSort(arr) {
  if (arr.length < 2) return;

  // i 是 为排序的元素index
  for (let i = 1; i < arr.length; i++) {
    // j是 已经排序的列表index
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
}

let arr = [3, 9, 8, 7, 1];
insertSort(arr);
console.log(arr);
