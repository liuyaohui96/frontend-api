/*
 将第一个当作有序序列，第二个元素到最后一个为未排序序列
 从头到尾，扫描未排序数列，将它插入到已经排序的序列中
 
 有序序列的后面开始与元素比较....
*/

function insertSort(arr){
    for(let i=1; i<arr.length;i++){
        // 需要记住当前元素前面的已排序的下标
        let flag=i-1;
        // 保存当前值，防止被覆盖
        current=arr[i];

        //如果当前值小于排序序列的值, 当前flag值后移，flag-1，继续比较
        while(flag>=0 && current<arr[flag]){
            arr[flag+1]=arr[flag];
            flag--;
        }
        // flag 的后一个位置放置当前迭代值
        arr[flag+1]=current;
    }
}

let arr=[1, 3, 2, 4];
let result=insertSort(arr);
console.log(arr);