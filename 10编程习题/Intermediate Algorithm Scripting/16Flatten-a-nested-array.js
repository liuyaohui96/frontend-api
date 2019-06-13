// [[["a"]], [["b"]]] should return ["a", "b"]

function flattenArray(arr){
    let result=[];
    // 解绑
    function flatten(flat){
        // 如果不是数组
        if(!Array.isArray(flat)){
            result.push(flat);
        }else{
            flat.forEach(item => flatten(item));
        }
    }

    arr.forEach(item => flatten(item));
    return result;
}

function flattenArray2(arr){
    // 解构为数组
    let flat=[].concat(...arr);
    // 如果存在数组，继续传递参数解构
    return flat.some(item => Array.isArray(item))?flattenArray2(flat):flat;
}


function flattenArray3(arr){
    return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

let result=flattenArray([1, [2], [3, [[4]]]]);
console.log(result);
result=flattenArray2([1, [2], [3, [[4]]]]);
console.log(result);