
## v-model
1. 期望：随着表单类型的不同而不同
2. 限制
    * `<input>`
    * `<select>`
    * `<textarea>`
    * component
3. 修饰符
    * .lazy - 监听change 事件, 而不是input事件。默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步，可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步
    * .number - 转换输入的字符串为数字。即使在 type="number" 时，HTML 输入元素的值也总会返回字符串，当需要得到number时可以使用
    * .trim - 过滤表单输入的首尾空格

4. 描述：为表单元素或者组件实现双向数据绑定

v-model 会忽略表单元素中初始化的`value checked selected`属性，将vue 实例中的 data作为真实来源(the source of truth), 你需要在组件或实例内的data选项中进行初始值的配置

v-model 为不同的表单元素使用不同的属性和触发不同的事件：
* text 和 textarea 元素使用 `value 属性`和 `input 事件`
* checkbox 和 radio 使用 `checked 属性`和 `change 事件`
* select 字段将 `value 作为 prop` 和 `change 事件`

v-model 通过监听相应的表单事件，修改相应的属性，然后将相应的值更新到绑定的数据上


## text
```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

## Multiline text
```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

## checkbox
```html
<!-- Single checkbox, boolean value -->
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

<!-- Multiple checkboxes, bound to the same Array -->
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

## radio
```html
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
```

## select
```html
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
<span>Selected: {{ selected }}</span>


<!-- Multiple select (bound to Array) -->
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span>

<!-- Dynamic options rendered with v-for -->
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
<!-- 部分data内容 -->
data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
```