There is only one **store** in application, so state is like a single state tree(单一状态树)

the simplest way to "retrieve" state that is simply **returning state within a computed property**

## Getting Vuex State into Vue Components
```js
computed: {
    count () {
      return store.state.count
    }
}
// 需要解决每次import store 的问题
```
When using a module system, it requires importing the store in every component that uses store state, and also requires mocking when testing the component

Vuex provides a mechanism to "inject" the store into all child components from the root component with the store option.

By **providing the store option to the root instance, the store will be injected into all child components of the root** and will be available on them as `this.$store`

```js
const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  // ...
})
```

## The mapState Helper
When a component needs to make use of multiple store state properties or getters, declaring all these computed properties can get repetitive and verbose(重复和冗长)

```js
import { mapState } from 'vuex'

computed: mapState({
  // arrow functions can make the code very succinct!
  count: state => state.count,

  // passing the string value 'count' is same as `state => state.count`
  countAlias: 'count',

  // to access local state with `this`, a normal function must be used
  countPlusLocalState (state) {
    return state.count + this.localCount
  }
})

// We can also pass a string array to mapState
computed: mapState([
  // map this.count to store.state.count
  'count', 'count2'
])
```

mapState returns an object. we should use it in combination with other local computed properties by using `Object Spread Operator` merge multiple objects into one.
```js
computed: {
  localComputed () { /* ... */ },
  // mix this into the outer object with the object spread operator
  ...mapState({
    // ...
  })
}
```

Using Vuex doesn't mean you should put all the state in Vuex. Although putting more state into Vuex makes your state mutations more explicit and debuggable（显然和可维护）, sometimes it could also make the code more verbose and indirect(冗长和不直接).

tips: If a piece of state strictly belongs to a single component, it could be just fine leaving it as local state.