
## promise生命周期
1. promsie初始为 挂起状态(pending state), 表示异步操作还没有开始，挂起状态也可以认为是未决的(unsettled)

2. 异步操作结束后，promise就是已决的（settled），进入以下两种状态之一：
    * fullfilled：已完成状态