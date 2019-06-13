// an initial array (the first argument)
// followed by one or more arguments
// 删除第二个参数之后的数组元素

function destroyer(arr, ...arr2){
    return arr.filter(item => !arr2.includes(item));
}

function destroyer2(arr) {
    // Array.from() method creates a new, shallow-copied Array instance
    //  from an array-like or iterable object.
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }

let result=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);