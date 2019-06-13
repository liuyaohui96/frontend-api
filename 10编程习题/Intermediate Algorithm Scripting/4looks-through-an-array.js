// looks through an array of objects (first argument) and returns an array of all objects
// that have matching name and value pairs (second argument)

function findObject(arr, target){
    // 首先，取得目标对象的key数组
    let keyArr=Object.keys(target);

    // filter 需要根据一个条件筛选
    // 条件是目标对象使用every判断key在一个元素内，并且属性值相等
    return arr.filter(item => 
            keyArr.every(key => item.hasOwnProperty(key) && item[key]===target[key]));

}



let result=findObject([{ first: "Romeo", last: "Montague" }, 
        { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
        { last: "Capulet" });
console.log(result);

