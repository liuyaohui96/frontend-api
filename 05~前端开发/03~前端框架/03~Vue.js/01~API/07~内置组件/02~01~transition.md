
## transition
1. 属性（详细见下面）
2. 事件（详细见下面）
3. 描述：`<transition>`为单个元素或单个组件应用过渡，过渡效果只会应用到其包裹内容


```html
<!-- simple element -->
<transition>
  <div v-if="ok">toggled content</div>
</transition>

<!-- dynamic component -->
<transition name="fade" mode="out-in" appear>
  <component :is="view"></component>
</transition>

<!-- event hooking -->
<div id="transition-demo">
  <transition @after-enter="transitionComplete">
    <div v-show="ok">toggled content</div>
  </transition>
</div>

<!-- method选项的一部分 -->
methods: {
    transitionComplete: function (el) {
      // for passed 'el' that DOM element as the argument, something ...
    }
}
```


## 属性
* name - string 用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为.fade-enter，.fade-enter-active等。* 默认类名为 "v"

* appear - boolean，是否在初始渲染时使用过渡。默认为 false。

* css - boolean，是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。

* type - string，指定过渡事件类型(the type of transition event)，侦听过渡何时结束。有效值为 `"transition" `和 `"animation"`。默认 Vue.js 将自动检测持续时间较长的类型。

* mode - string，控制离开/进入的过渡时间序列。有效的mode有`"out-in"` 和 `"in-out"`；默认的过渡是entering和leaving同时发生。vue 提供了一些替代值
  * `in-out` 新元素先过渡，完成之后，当前元素移除过渡
  * `out-in` 当前元素首先过渡移除u，完成之后，新元素过渡进入。

* duration - `number | { enter: number, leave: number }`，指定过渡的持续时间。默认情况下，Vue 会等待所在根过渡元素的第一个 `transitionend` 或 `animationend` 事件。

* appear-class - string
* appear-to-class - string
* appear-active-class - string

* enter-class - string
* enter-active-class - string
* enter-to-class - string


* leave-class - string
* leave-active-class - string
* leave-to-class - string



## 事件(过渡钩子)
* before-appear
* appear
* after-appear
* appear-cancelled

* before-enter
* enter
* after-enter
* leave-cancelled (v-show only)


* before-leave
* leave
* after-leave
* enter-cancelled

## transition
当items从DOM中插入，更新或者移除(inserted, updated, removed)时，具有多种工具
* 自动为css过渡和动画应用类
* 第三方css动画库，如Animate.css
* 在过渡钩子期间直接使用JavaScript 处理DOm
* 第三方javascript动画库，如Velocity.js
