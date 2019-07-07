参考文档： https://juejin.im/post/5cdd178ee51d456e811d279b

## animation
animation: name time timing-function animation-iteration-count animation-direction fill-mode play-state

* name: 动画名称
* ztime: 第一个是animation-duration, 第二个是animation-delay
* timing-function: linear | ease | ease-in | ease-out | ease-in-out
* animation-iteration-count: 迭代次数  number|infinite
* animation-direction:　normal | reverse | alternate | alternate-reverse
* animation-play-state: 动画启动或者暂停 running | paused
* animation-fill-mode: 动画结束后，元素状态
  - none
  - forwards 动画结束后的状态
  - backwards 第一桢状态
  - both 同时运用


## 动画常用属性
- translate
- scale
- rotate
- skew(歪斜)
- color/background-color
- opacity



## 简单例子
```css
div{  
  width: 40px;  
  height: 40px;  
  border-radius: 50%;  
  background: #0ff;  
  animation: move 2s linear 3 alternate both;
}
  
  @keyframes move{  
    0%{  
      transform: translate(0,0);
    }  
    100%{    
      transform: translate(200px,0);  
    }
  }
```


## 多个动画的顺序
```css
#colors {
  animation-name: red, green, blue; /* 假设这些 keyframe 都是修改 color 这个属性 */
  animation-duration: 5s, 4s, 3s;
}
```
前 3 秒是 blue，然后接着 1 秒是 green，最后 1 秒是 red

## css动画进度条
```css
@keyframes move{  
  100%{    
    background-size: 100%;  }
}
div{
  height: 10px;  
  border: 1px solid;  
  background: linear-gradient(#0ff,#0ff);  
  background-repeat: no-repeat;  
  background-size: 0;  
  animation: move 2s linear forwards;
}
```

## 动画最小时间间隔
多数显示器默认频率是60Hz，即1秒刷新60次，

每次刷新需要多少时间，即理论上最小间隔：为1000ms / 60 ＝ 16.7ms。

## CSS3动画的优缺点
优点：
1. 代码简单
2. 浏览器会对CSS3动画做一些优化

缺点：
1. 动画控制不够灵活
2. 部分动画无法实现
3. 兼容性不够好