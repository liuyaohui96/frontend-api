<div style="color:red; font-size: 14px;font-weight: bold">
本节重点：
<p>1. WeakSet的概念</p>
<p>2. WeakSet的构造和初始化</p>
<p>3. WeakSet的常用API方法</p>
<p>4. Set 与 WeakSet的差异（从WeakSet角度看）</p>
</div>

## WeakSet
Set 存储对象，实际上是把对象引用存储到Set中，只要Set实例存在，对象引用就一直保存在Set中，对象就无法被垃圾回收，从而无法释放内存。所以引入了WeakSet，**只存储对象的弱引用，不存储基本类型值，对象的弱引用在自己成为对象唯一引用时，不会阻止垃圾回收**。

```js
// === 创建weakset
let set = new WeakSet();
let key = {};

// === 使用迭代对象初始化，迭代对象的元素必须是对象
let key1 = {},
  key2 = {},
  set = new WeakSet([key1, key2]);

// ===== 属性与方法
// add方法
set.add(key);
// has方法
console.log(set.has(key)); // true
// delete方法
set.delete(key);
console.log(set.has(key)); // false
```

## Set 与 WeakSet之间的差异
1. WeakSet 存储对象的弱引用，不能存储基本类型值
2. 由于是对象的弱引用，不可迭代，所以不能使用`for-of`迭代，没有`forEach()`方法，没有`size`属性
3. WeakSet 无法暴露任何迭代器(例如 `keys()` 和 `values()`)，所以没有编程手段用于判断WeakSet内容
