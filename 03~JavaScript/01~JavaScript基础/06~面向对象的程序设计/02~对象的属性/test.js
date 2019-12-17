let obj = {
  age: 24
};
Object.defineProperty(obj, 'name', {
  value: 37
});
console.log(Object.getOwnPropertyDescriptors(obj));
let target = {};

target = Object.assign(target, obj);
console.log(target);

Object.getw;
