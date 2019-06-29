the core part of vuex is Vuex

1. **store** is a container that holds your application **state**
2. store is reactive. If state change, vue components that get state from store will reactively update.
3. the only way to change **state** in store is **committing mutations**

> Because **state** is reactive, **state** is used in component **computed** property.

> Triggering changes means committingg mutation in component **method**.