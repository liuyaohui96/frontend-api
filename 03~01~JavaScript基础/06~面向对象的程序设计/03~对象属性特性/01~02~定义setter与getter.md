
```js
// 对象字面量
let obj = {
    get b(){
        return this.b + 1;
    },
    set c(){
        this.c  + 1;
    }
}

Object.defineProperties(obj), {
    "b": { get: function () {  return this.b + 1; } },
    "c": { set: function (x) {  this.c  + 1; } }
});
```