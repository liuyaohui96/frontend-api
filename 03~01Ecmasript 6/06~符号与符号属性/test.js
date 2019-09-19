// built into ECMAScript 6 by default
Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null), {
  copyWithin: true,
  entries: true,
  fill: true,
  find: true,
  findIndex: true,
  keys: true,
  values: true
});
