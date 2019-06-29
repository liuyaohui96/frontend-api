// 深度拷贝
function deepCopy(srcObj) {
  return JSON.parse(JSON.stringify(srcObj))
}

let srcObj = {
  name: 'liuyaohui',
  age: 12
}
let targetObj = deepCopy(srcObj)
console.log(targetObj)
