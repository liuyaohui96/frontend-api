
## model
1. 类型: `{ prop?: string, event?: string }`

允许自定义组件在使用`v-model`时自定义prop和event。默认情况下，组件使用`value`作为prop，使用`input`作为event，但是有些input types, 如checkbox, radio button 可能需要使用`value`prop作为不同的用途。可以使用model 选项避免这种冲突

```js
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: String,
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})

// html
<my-checkbox v-model="foo" value="some value"></my-checkbox>

// The above will be equivalent to:
<my-checkbox
  :checked="foo"
  @change="val => { foo = val }"
  value="some value">
</my-checkbox>

```