## Style 绑定
1. 对象语法
  ```html
  <div 
  v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
  </div>
  ```
  或者直接绑定到一个样式对象
  ```html
  <div v-bind:style="styleObject"></div>
  ```

2. 数组语法
  ```html
  <div v-bind:style="[baseStyles, overridingStyles]"></div>
  ```

## 自动添加前缀
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。