## apply & call & bind
1. fn.call(obj, arg1, arg2, ...)
2. fn.apply(obj, [argsArray]) apply的第二个参数是数组或类数组
3. bind bind 和 call/apply 有一个很重要的区别，一个函数被 call/apply 的时候，会直接调用，但是 bind 会创建一个新函数