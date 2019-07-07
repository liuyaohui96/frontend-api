## 媒体查询
```css
@media 媒体类型 and 媒体特性{
  /* 样式规则 */
}
```

@media 的四种常用类型
1. all，适用于所有媒体设备
2. print，仅适用于打印机
3. screen，仅适用于屏幕设备（台式电脑、平板电脑、移动设备等）
4. speech，仅适用于屏幕阅读器

## 例子
```js
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
```