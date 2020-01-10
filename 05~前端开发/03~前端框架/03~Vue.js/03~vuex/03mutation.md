The only way to actually change state in a Vuex store is by** committing a mutation**. 


Vuex mutations are very similar to events: each mutation has a **string type** and a **handler**. it will receive the state as the first argument

```js
mutations: {
  increment (state) {
    // mutate state
    state.count++
  }
}

```

**You cannot directly call a mutation handler**. Think of it more like event registration: "When a mutation with type increment is triggered, call this handler." To invoke a mutation handler, you need to call **store.commit** with its type

```js
store.commit('increment')
```

## Commit with Payload
pass an additional argument to store.commit, which is called the **payload** for the mutation
```js
mutations: {
  increment (state, n) {
    state.count += n
  }
}

store.commit('increment', 10)

// In most cases, the payload should be an object
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})

// Object-Style Commit
store.commit({
  type: 'increment',
  amount: 10
})
```

## Mutations Follow Vue's Reactivity Rules  
When adding new properties to an Object
  * Use Vue.set(obj, 'newProp', 123)
  * Replace that Object with a fresh one `state.obj = { ...state.obj, newProp: 123 }`

## Using Constants for Mutation Types
It is a commonly seen pattern to use constants for mutation types in various Flux implementations.

```js
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
```

```js
// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
  // ...
  mutations: {
    // we can use the ES2015 computed property name feature
    // to use a constant as the function name
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
  // ...
```

## Mutations Must Be Synchronous（同步）
if mutation is synchronous, the callback is not called when mutation is committed, there is no way for devtool to know when the call back will actually be called, any state mutation performed in the callback is un-trackable.

## Committing Mutations in Components
You can commit mutations in components with this.$store.commit('xxx'), or use the mapMutations helper

```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
}
```