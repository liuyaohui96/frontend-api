
> cloak: 遮掩

## v-cloak
1. 期望: 不需要表达式
2. 描述：保持元素的指令直到相关vue实例完成编译。与`v-cloak] { display: none }`组合可以隐藏未编译插值直到vue 实例构建完成。

```html
<!-- The <div> will not be visible until the compilation is done. -->
[v-cloak] {
  display: none;
}

<div v-cloak>
  {{ message }}
</div>
```
