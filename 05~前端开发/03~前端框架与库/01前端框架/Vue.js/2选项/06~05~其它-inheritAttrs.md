
## inheritAttrs
1. 类型： Boolean
2. Default: true

默认情况下，父级作用域属性绑定中没有作为子组件的props 的属性会被应用到子组件的根元素的html属性上。可以设置inheritAttrs 为 false 关闭这种行为。

通常使用inheritAttrs 和 `$attrs` 选择在指定的元素使得属性生效