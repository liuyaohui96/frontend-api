1. 对象语法
  ```html
  <div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
  ></div>

  <!-- 绑定的数据对象不必内联定义在template内 -->
  <div v-bind:class="classObject"></div>
  ```

2. 数组语法
  ```html
  <div v-bind:class="[activeClass, errorClass]"></div>

  <!-- 组语法中也可以使用对象语法： -->
  <div v-bind:class="[{ active: isActive }, errorClass]"></div>
  ```