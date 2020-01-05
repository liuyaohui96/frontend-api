Instead of mutating the state, actions commit mutations.Actions can contain arbitrary(任意的) asynchronous operations.


Action handlers receive a context object which exposes the same set of methods/properties on the store instance, so you can call context.commit to commit a mutation, or access the state and getters via context.state and context.getters

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

// we often use ES2015 argument destructuring to simplify the code
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

## Dispatching Actions
Actions are triggered with the `store.dispatch` method

```js
store.dispatch('increment')

// dispatch with a payload
store.dispatch('incrementAsync', {
  amount: 10
})

// dispatch with an object
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

mutations is synchronous. Actions don't. We can perform asynchronous operations inside an action:

```js
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

## Dispatching Actions in Components
dispatch actions in components with `this.$store.dispatch('xxx')`, or use the mapActions helper which maps **component methods** 

```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }
}
```

## Composing Actions
how can we compose multiple actions together to handle more complex async flows? The first thing to know is that store.dispatch can handle Promise returned by the triggered action handler and it also returns Promise

```js
actions: {
 actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for `actionA` to finish
    commit('gotOtherData', await getOtherData())
  }
}
}

// Now you can do:
store.dispatch('actionB').then(() => {
  // ...
})
```