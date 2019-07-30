
## provide & inject
1. 类型：
    * provide: `Object | () => Object`
    * inject: `Array<string> | { [key: string]: string | Symbol | Object }`

2. 描述：provide 和 inject 主要为高级插件/组件库提供用例(use cases), 不推荐在应用程序代码中使用


provide 和 inject 需要一起使用，允许父级组件向子孙组件（无论层次多深）注入依赖

provide 需要返回object，或者一个function返回object，对象内包含了注入到(inject)子孙组件的依赖属性

inject 是一个字符串数组，或者所示一个key是本地绑定的名称，value可能是
* 可访问注入的key
* 对象的from或者default属性


注意，provide 和 inject 都不是响应式的，这是刻意为之，但是，如果传入了一个observerd object（可观测对象), 对象上的属性保持响应式。

```js
// parent component providing 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// child component injecting 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}

// === With ES2015 Symbols
const s = Symbol()

const Provider = {
  provide () {
    return {
      [s]: 'foo'
    }
  }
}

const Child = {
  inject: { s },
  // ...
}
```

## from & default
```js
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}

// 与props类似，对于引用值，需要使用工厂函数
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```