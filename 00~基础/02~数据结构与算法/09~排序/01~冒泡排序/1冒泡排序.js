/*
  当前元素与后以一个元素对比，如果当前元素较大，则交换
  继续前进，执行操作，到最后两个元素交换后，最后的元素的位置是正确的。
  由于最后的元素位置逐渐变小，比较次数也会逐渐

  时间复杂度 O(n*n), 最好情况O(n)
  空间复杂度 O(1)

*/

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]) [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
        }
    }
}

let arr=[1, 3, 4, 2];
bubbleSort(arr);
console.log(arr);