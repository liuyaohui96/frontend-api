//如为对象添加Iterator 接口;
let obj = {
  name: 'Yvette',
  age: 18,
  job: 'engineer',
  [Symbol.iterator]() {
    const self = this
    const keys = Object.keys(self)
    let index = 0
    return {
      next() {
        if (index < keys.length) {
          return {
            value: self[keys[index++]],
            done: false
          }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

for (let item of obj) {
  console.log(item) //Yvette  18  engineer
}
