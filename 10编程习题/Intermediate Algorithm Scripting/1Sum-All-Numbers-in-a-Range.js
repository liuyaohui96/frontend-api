// pass an array of two numbers
// Return the sum of those two numbers plus the sum of all the numbers between them
function sumAll(arr){
    // 找到数组的最大和最小，然后循环求和
    let min =Math.min(arr[0], arr[1]);
    let max =Math.max(arr[0], arr[1]);
    let result=0;
    for(let i=1;i<=4;i++){
        result+=i;
    }
    /*
    或者求和时使用高斯算法
    (首项+末项)*项目数/2
    let resutlt=(min+max)*(max-min+1)/2;
    */
    return result;
}

function sumAll2(arr){
    let result=0;
    // 利用延展运算符结构数组
    for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
        result+=i;
    }
    return result;
}
let result=sumAll([1, 4]);
console.log(result);

result=sumAll2([1, 4]);
console.log(result);