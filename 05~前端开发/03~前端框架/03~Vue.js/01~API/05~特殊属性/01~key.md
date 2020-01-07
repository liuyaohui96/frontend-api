
## key
1. 期望：`number | string`
2. 描述：key 属性用于在比对新列表和旧列表中区分(identify)VNodes. 没有key，vue 会使用最小化移动的算法，尽可能就地(in place)修补和重用元素。如果有key，会基于key顺序的变化重新排列元素，并且会移除不再存在key的元素。

具有相同父元素的孩子的key必须是独一无二的，重复的key会导致渲染错误

```html
<!-- === v-for 使用key的场景 -->
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>

<!-- 
强制替换元素/组件而不是重用，以下情况是很有用的：
1. 触发组件生命周期函数
2. 触发回调

当text修改后，span会被替换而不是重用/修改，从而触发过渡
 -->
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```