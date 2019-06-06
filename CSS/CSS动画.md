animation: name time timing-function animation-iteration-count animation-direction fill-mode play-state

name: 动画名称
time: 第一个是animation-duration, 第二个是animation-delay
timing-function: linear | ease | ease-in | ease-out | ease-in-out
animation-iteration-count: 迭代次数  number|infinite
animation-direction:　normal | reverse | alternate | alternate-reverse
animation-play-state: 动画启动或者暂停 running | paused
animation-fill-mode: 动画结束后，元素状态 none | forwards | backwards | both
  - forwards 动画结束后的状态
  - backwards 第一桢状态
  - both 同时运用

# 动画常用属性
- translate
- scale
- rotate
- skew(歪斜)
- color/background-color
- opacity


# 动画定义
```css
@keyframes key-frame-name {
  from { left: 0; top: 0; }
  to { left: 100%; top: 100%; }
}
```

