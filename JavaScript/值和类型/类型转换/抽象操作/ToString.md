# 抽象操作ToString
负责处理非字符串到字符串的强制类型转换。
1. 数字的字符串化则遵循通用规则
2. null 转换为 "null",undefined 转换为 "undefined"，true转换为 "true", false 转换为"false"
3. 对象来说，先执行toString，看是否能转换，如果不可以再执行valueOf，看是否可以转换，如
内部属性 [[Class]] 的值（如 "[object Object]"）。如果不可以则报错。
  

