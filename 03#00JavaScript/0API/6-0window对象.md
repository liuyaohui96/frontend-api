## 对象
1. location  文档有关信息和导航功能。可以看作是浏览器的地址栏
2. history 浏览器历史记录，相当于浏览器的前进/后退的区域




## 系统对话框
1. alert
2. window.confirm(message)
  - return：result is a boolean value indicating whether OK or Cancel was selected (true means OK).

3. result = window.prompt(message, default)
  - message 问题
  - default 输入框内的默认值
  - return: A string containing the text entered by the user, or null

## open
var window = window.open(url, windowName, [windowFeatures]);
  - return: A Window object representing to the newly created window.

> [windowFeatures]举例: "width = ..., height=..., top=..., left =..."

window.opener
  - if window A opens window B, B.opener returns A