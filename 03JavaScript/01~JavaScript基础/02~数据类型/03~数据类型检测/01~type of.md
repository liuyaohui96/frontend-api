# typeof类型检测
1. typeof null -> null
2. typeof function(){} -> function
3. typeof a -> undefined
  b=undefined; typeof b -> undefined
4. typeof typeof 任何变量或值 -> string

扩展： 如何判断null值
  - ` !a && type of a==="object" `