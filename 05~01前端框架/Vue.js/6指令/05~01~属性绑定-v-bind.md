
## v-bind
1. 缩写：`:`
2. 期望：`any (with argument) | Object (without argument)`
3. 参数：attrOrProp (optional) 动态绑定的属性
4. 修饰符（详细见下面）
5. 描述：动态绑定一个或多个属性；为组件定义prop

当定义`class | style`属性的时候，额外支持Array 和 Object 类型

如果要作为prop 绑定，子组件必须正确声明prop

没有参数(argument)时，可以绑定包含attribute/value 的对象， 这个模式下的`class | style`不支持对象形式


```html
<!-- ==== example -->
<!-- bind an attribute -->
<img v-bind:src="imageSrc">

<!-- dynamic attribute name (2.6.0+) -->
<!-- 动态属性绑定 -->
<button v-bind:[key]="value"></button>

<!-- shorthand -->
<img :src="imageSrc">

<!-- shorthand dynamic attribute name (2.6.0+) -->
<button :[key]="value"></button>

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName">


 <!-- 对象表示法，没有参数 -->
<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 将组件向下传递给子组件 -->
<!-- pass down parent props in common with a child component -->
<child-component v-bind="$props"></child-component>

<!-- prop binding. "prop" must be declared in my-component. -->
<my-component :prop="someThing"></my-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

## class 和 style 的数组或对象绑定形式
```html
<!-- class 和 style 的数组或对象绑定形式 -->
<!-- class 与:class 可以共存合并 -->
<!-- =====class binding -->
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">
<div :class="{ red: isRed }"></div>
<div :class="classObject"></div>
<!-- 当表达式过长或者逻辑复杂时可以使用计算属性 -->
<div :class="computedProperty"></div>


<!-- ========style binding -->
<!-- 
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，
如 transform，Vue.js 会自动侦测并添加相应的前缀 
-->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="styleObject"></div>
<!-- style 数组语法不经常使用，因为往往写在一个对象里面 -->
<!-- 数组内使用容纳多个对象 -->
<div :style="[styleObjectA, styleObjectB]"></div>
```

## 修饰符
* .prop - 作为DOM属性(dom property)而不是普通属性(attribute). 如果标签是一个组件，`.prop`会在元素的`$el`属性上设置属性
* .camel - (2.1.0+) 将 kebab-case 命名转换为camelCase 命名
* .sync - (2.3.0+) 扩展v-on事件处理程序更新绑定值的语法糖

```html
<!-- DOM attribute binding with prop modifier -->
<div v-bind:text-content.prop="text"></div>
```