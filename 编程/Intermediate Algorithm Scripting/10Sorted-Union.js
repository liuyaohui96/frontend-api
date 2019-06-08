// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

function sortUnion(...arr){
    let newArr=[].concat(...arr);
    return [...new Set(newArr)];
}


function sortUnion2(arr){
    let result=[];

    for(let i=0;i<arguments.length;i++){
        for(let j=0;j<arguments[i].length;j++){
            if(result.indexOf(arguments[i][j])<0){
                result.push(arguments[i][j]);
            }
        }
    }
    return result;
}


function sortUnion3(arr){
    let newArr=[...arguments];
    // 左边元素连接右边的元素作为新元素
    // 不过连接条件需要右边的元素未曾在左边出现
    return newArr.reduce( (arrA, arrB) =>
        arrA.concat(arrB.filter(item => arrA.indexOf(item)<0) // end filter
        )    // end concat
    ); // end reduce
}


let result=sortUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
result=sortUnion2([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
result=sortUnion3([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);