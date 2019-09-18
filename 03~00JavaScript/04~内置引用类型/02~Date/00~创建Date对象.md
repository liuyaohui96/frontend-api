Date类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期
## 创建Date对象
```js
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

// 举例
new Date('2019/05/13')
new Date('2019-05-13')
new Date('2019,05,13,0, 0, 0')
new Date(millseconds) // 1970 Jan 1 开始计算
```