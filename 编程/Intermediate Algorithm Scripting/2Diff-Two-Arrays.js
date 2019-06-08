// Compare two arrays and return a new array 
// with any items only found in one of the two given arrays
// 返回在另一个数组中不存在的元素

function diffArray(arr1, arr2){
    let newArr=[];

    // 循环迭代将找不到的元素push到数组
    arr1.forEach(item => {
        //找不到元素
        if(arr2.indexOf(item)<0){ 
            newArr.push(item);
        } 
    });

    arr2.forEach(item => {
        //找不到元素
        if(arr1.indexOf(item)<0){ 
            newArr.push(item);
        } 
    });

    return newArr;
}

// 先筛选，再结合
function diffArray2(arr1, arr2){
    // 使用fiter和includes, concat
    return arr1.filter(item => !arr2.includes(item))
    // 连接两个filter
        .concat(arr2.filter(item => !arr1.includes(item))
        );
}

// 先结合，再筛选
function diffArray3(arr1, arr2){
     // 或者concate之后,再filter
     return arr1.concat(arr2)
     // 数组1不存在或者数组2不存在则返回
        .filter(item => !arr1.includes(item)||!arr2.includes(item));
}

// 利用延展运算符调用函数返回数组
function diffArray4(arr1, arr2){
    function diff(a,b){
        return a.filter(item => !b.includes(item))
    };
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

let result=diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
result=diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
result=diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]);
result=diffArray4([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);