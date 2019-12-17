
## @mixin
利用混合器，可以很容易地在样式表的不同地方共享样式，如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器

判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式
```scss
@mixin name {
  property: value;
  property: value;
  ...
}

// 可以引入参数
@mixin name($property...) {
  property: value;
  property: $property;
  ...
}

// 可以使用 @include 引用该mixin

// === 例子
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px);  // Call mixin with two values
}

// 编译结果
.myArticle {
  border: 1px solid blue;
}
```

## mixin 默认值
```scss
// === 例子
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}
```

## 增加vendor前缀
```scss

```