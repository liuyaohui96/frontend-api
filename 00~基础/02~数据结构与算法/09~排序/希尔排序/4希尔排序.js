/*
    插入排序的该进，但不稳定
    将排序序列分隔成若干个序列进行插入排序...

    定义增量序列 DM>DM-1>...D1
    对Dk间隔进行排序
    DM=n/2  
*/

function shellShort(arr){
    // 自定义增量
    let d=1;
    while(d<arr.length/3){
        d=d*3+1;
    }

    while(gap>0){
        for(let i=d;d<arr.length;i++){
            let current =arr[i];
            for(let j=i-d;j>=0&&arr[j]>current;j-=d){
                arr[j+d]=arr[j]
            }
            arr[j+d]=current;
        }
        d=Math.floor(d/3);
    }
}


let arr=[1, 3, 2, 4];
shellShort(arr);
console.log(arr);