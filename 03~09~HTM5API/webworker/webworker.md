
## webworker
单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术。web worker技术开的多线程有着诸多限制：

1. 新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程
2. 子线程并没有执行I/O操作的权限，只能为主线程分担一些诸如计算等任务。严格来讲，这项技术并非改变了javascript语言的单线程本质



如何创建webworker

如何检查浏览器对于web worker的支持性

创建webworker 文件

创建webworker 对象