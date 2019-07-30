
## v-model
1. 期望：随着表单类型的不同而不同
2. 限制
    * `<input>`
    * `<select>`
    * `<textarea>`
    * component
3. 修饰符
    * .lazy - 监听input事件，取代监听change 事件。默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步，可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步
    * .number - 转换输入的字符串为数字。即使在 type="number" 时，HTML 输入元素的值也总会返回字符串，当需要得到number时可以使用
    * .trim - 过滤表单输入的首尾空格

4. 描述：为表单元素或者组件实现双向数据绑定
