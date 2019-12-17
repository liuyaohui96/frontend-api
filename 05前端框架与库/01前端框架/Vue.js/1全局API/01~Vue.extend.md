
## Vue.extend
1. 参数 `{Object} options`
2. 描述：创建Vue构造函数的子类
```js
// data option - it must be a function when used with Vue.extend()
// create constructor
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// create an instance of Profile and mount it on an element
new Profile().$mount('#mount-point')
```