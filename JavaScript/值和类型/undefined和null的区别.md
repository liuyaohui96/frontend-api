Null和Undefined，他们都有且仅有一个值，null和undefined
## undefined
Undefined 类型只有一个值，即undefined，表示未定义的值。

在以下 4 种场景中出现：
1. 声明一个变量，但是没有赋值
2. 访问对象上不存在的属性或者未定义的变量
3. 函数定义了形参，但没有传递实参
4. 使用void对表达式求值。ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 
undefined 

undefined转为数值时为NaN(非数字值的特殊值)

## null
null类型有一个值，null，表示空值

在以下 2 种场景中出现：
1. 定义的变量在将来用于保存对象，那么最好将该变量初始化为null，而不是其他值
2. 当一个数据不再需要使用时，我们最好通过将其值设置为null来释放其引用，这个做法叫做解除引用

## typeof null
特殊的typeof null，返回的类型是"object"
1. 逻辑角度来看，null值表示一个空对象指针，它代表的其实就是一个空对象，所以使用typeof操作符检测时返回"object"
2. JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)，null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"


实际上，undefined值是继承自null值得。undefined==null 为true