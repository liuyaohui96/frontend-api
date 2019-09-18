



## 动画属性
```css
/* === 使用动画需要先定义@keyframes 动画规则 */
@keyframes foo{
    /* 不同时间段的样式规则 */
    from{
        /* 样式属性 */
    },
    50%{
        /* 样式属性 */
    },
    to{
        /* 样式属性 */
    }
    /* 其中 from 相当于 0% */
    /* 其中 to 相当于 100% */
}

/* === anmation 属性使用定义好的@keyframes规则 */
animation: <animation-name> <animation-duration> <animation-timing-function> <animation-delay> 
    <animation-iteration-count> <animation-direction> <animation-fill-mode> <animation-play-state>

animation-name /* 动画名称*/
animation-duration /* 动画过程时间 */


/* 
step-start: 动画立即跳转到动画结束的状态
step-end: 动画结束后，立即跳转到开始状态
 */
animation-timing-function: ease | ease-in | ease-out | ease-in-out |
    step-strat | step-end /* ease 是默认的动画函数 */
/* 使用steps函数，可以定义到达end的n个步骤 */
animation-timing-function: steps(4, end);

animation-delay /* 动画开始延迟时间 */
animation-iteration-count: 1 | n | infinite /* 1 是默认的动画迭代次数 */

/* 
reverse 从最后一帧到第一帧迭代
alternate   1 -> n -> 1 -> ...
alternate-reverse n -> 1 -> n -> ...
 */
animation-iteration-direction: normal | reverse | alternate | alternate-reverse /* normal 是默认的 */

/* 
动画执行前后如何为样式动画应用样式
none: default，动画未执行时，动画将不会将任何样式应用于目标，元素应用原来的样式
forwards: 样式保留在动画结束时候的状态
backwards: 样式保留在第一帧中的状态
both: 遵顼forwards和backwards规则，在两个方向上应用
 */
animation-fill-mode: none | forwards | backwards | both

/* 默认值是running，通常通过设置javascript设置animation-play-state切换动画状态 */
animation-play-state: running | paused
```

## 动画常用属性
1. 颜色属性：`color|background-color|opacity`
2. 转换属性: `translate|scale|rotate|skew

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

## transition 和 animation 的区别
* transition 需要触发一个事件才能改变属性，而animation不需要触发任何事件都能够改变属性
* transition只有开始和结束两个状态属性的设置，而animation可以设置多个帧。

## javascript 动画和css3动画的区别
1. javascript 动画更加全面
2. css3 动画更加简单，浏览器自动进行优化
3. css3 动画存在兼容性问题

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
