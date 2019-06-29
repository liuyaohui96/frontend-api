Sometimes we may need to **compute derived(派生) state** based on store **state**.

```js
// for example
computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}
```
If more than one component needs to make use of this, we have to either duplicate the function, or extract it into a shared helper and import it in multiple places

Vuex allows us to define "getters" in the store. 

Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed

**Getters will receive the state as their 1st argument**

**Getters will also receive other getters as the 2nd argument**
```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

//  ======== receive other getters as the 2nd argument
getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```

## Property-Style Access
```js
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

## Method-Style Access
pass arguments to getters by returning a function
```js
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```

## The mapGetters Helper
```js
 // ...
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
```
