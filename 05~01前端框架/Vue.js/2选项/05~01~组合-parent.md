
## parent
1. 类型：Vue instance
2. 描述：指定实例的父实例。对于子实例来说，反问父实例可以通过`this.$parent`访问；对于父实例来说，访问子实例可以通过访问`this.$children`数组

注意：节制地使用`$parent 和 $children`, 它们是应急使用的，更好的推荐是使用props和events实现父子组件的通信