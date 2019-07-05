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

