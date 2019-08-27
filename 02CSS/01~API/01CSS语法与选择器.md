## 语法
```css
selector{
  /* description = property + value  */
  property: value;
}

selectorGroup{
  property: value;
}
```

> selector 出错，将会应用样式与元素发生错误。
> selectorGroup任意一个selector出错，所以语法都会出错
> description 出错将不会对其进行解析，不会影响其余description的解析

## 选择器
1. simple selector
  * univaersal selector
  * type selector
  * class selector
  * id selector
  * attribute selector
    - [att] 根据attr,不管value如何
    - [att=val] 根据attr及其value
    - [att~=val] 根据attr的value包含val(val是一个玩完整的word)
    - [att*=] 根据attr的value包含val
    - [att|=val] 根据attr即value以val开头,以连字符分割
    - [att^=val] 根据attr即value以val开头
    - [att&=val] 根据attr即value以val结尾
  * Pseudo-class
    - :root一般为html根元素
    - e:nth-child(odd|even|n) e元素是它的父元素的第n个元素
    - e:nth-last-child(old|even|n) 从后往前数，e元素是它的父元素的第n个元素
    - e:nth-of-type e元素是它的父元素的第n个指定的e元素
    - e:nth-last-of-type 从后往前数,e元素是它的父元素的第n个指定的e元素
    - e:first-child e元素是它的父元素的第一个元素
    - e:last-child e元素是它的父元素的最后一个元素
    - e:first-of-type  e元素是它的父元素的第1个指定的e元素
    - e:last-of-type  e元素是它的父元素的最后一个指定的e元素
    - e:empty 选择没有子元素的e元素
    - e:not(selector) 选择不具备sector参数性质的e元素


> 注意： [att~=val],需要包含完整的val才能应用
> 注意：对于[att|=val], 需要时完整的val开始，并且与其他字符以空格或者-分离才能应用 
> first-child first-of-type 的区别是什么: first-child 匹配的是父元素的第一个子元素；first-of-type匹配的是父元素的第一个该类型元素

2. Pseudo-elements
  * e::first-line e元素的第一行
  * e::first-letter e元素的第一个letter
  * e::before 在e元素前插入内容
  * e::after 在e元素后插入内容

3. Combinators 组合选择器
  * Descendant combinator 后代组合选择器
      ```css
      parent child{
        ...
      }
      ```

  * Child combinators 孩子组合选择器
    ```css
      parent > child{
        ...
      }
      ```

  * Sibling combinators
    ```css
    /* 邻接选择器Next-sibling combinator */
    seletor1 + selector2{
      ...
    }

    /* 兄弟组合选择器 Subsequent-sibling combinator */
    selector1 + selector2{
      ...
    }
    ```

## 如何解析CSS选择器
为了避免对所有元素进行遍历,CSS选择器的解析是从右向左解析的，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。

若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能

> 两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面

## CSS3中单冒号和双冒号的区域主要是用来区分伪类和伪元素

1. 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素
2. ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中

> :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

## CSS 伪类和伪元素的区别
1. 伪类选择元素基于的是当前元素处于的状态，一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式
2. 伪元素是对元素中的特定内容进行操作，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行
3. 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素