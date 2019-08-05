let obj = {};
obj.__proto__.valueOf = function() {
  return 10;
};
obj.__proto__.toString = function() {
  return 20;
};
console.log(Number(obj));
