# 节点属性
  - 元素节点
  - 文本节点
  - 属性节点
    | 节点类型 | nodeType | nodeName | nodeValue |
    | -------- | -------- | -------- |
    | 元素节点 | 1        | 元素名称 | null      |
    | 属性节点 | 2        | 属性名称 | 属性值    |
    | 文本节点 | 3        | #text    | 文本内容  |

# 元素节点
## 获取元素节点
1. var element = document.getElementById(id) 获取元素节点
2. elements = document.getElementsByTagName(tagName) 获取元素
  - elements is an HTMLCollection; however, this method returns a NodeList in WebKit browsers. 是一个类数组结构
3. elements = document.getElementsByName(name) 
  - name 是元素的name属性
  - elements is a live NodeList Collection
  - 不支持从element.getElementsByName, 一般只有文本输入框才使用
4. var elements = document.getElementsByClassName(names); 
  - elements is a live HTMLCollection of found elements

## 元素节点属性  
1. element.tagName 标签名
2. element.innerHtml 元素节点标签间的内容
3. html属性
  - value
  - className !!!
  - style
  - id
  - ...

5. 子节点属性    
  - element.firstChild
  - element.lastChild
  - element.childNodes
  - element.childNodes.length  包括空白节点
    - `node.nodeType === 3 && /^\s+$/.test(node.nodeValue)`检查空白节点
    - 回车 换行 tab 空格都是空白字符

5. 其他
  - element.ownerDocument 返回该节点的根节点，相当于document，一般不需要用到
  - element.parentNode 返回节点父节点
  - element.previousSibling 返回上一个同级节点
  - element.nextSibling 返回下一个同级节点

## 元素节点-获取样式
1. element.style.xxx 只能获取行内样式的属性
2. var style = window.getComputedStyle(element[, pseudoElt]) 获取当前样式
  - IE不支持

## 元素节点-属性方法
1. var attribute = element.getAttribute(attributeName)
2. element.setAttribute(name, value)
3. element.attribute
4. element.removeAttribute(attrName)

> 区别： 
  1. .操作符通过`className`设置和访问，get/setAttribute通过class访问
  2. .操作符不能设置和访问自定义属性

# 属性节点
1. var attr = element.attributes 返回节点的属性集合
  - element.attributes.length 长度
  - myAttr = attrs.getNamedItem(name) 获取属性节点
  - element.attributes[name] 获取属性节点


# 创建元素节点
1. document.write()  会覆盖原有
2. var element = document.createElement(tagName[, options]) 创建节点
  - element.appendChild(aChild) 添加到节点中

3. var text = document.createTextNode(data) 创建文本节点，将它添加到元素节点即可


# 插入节点前后
1. var insertedNode = parentNode.insertBefore(newNode, referenceNode) 插入到节点之前
2. 封装insertAfter
  - 判断比对节点是否是最后一个
    - 最后一个，则插入到父节点末尾 
      - parent.appendChild()
    - 否则，则插入到该节点的下一个节点的之前的一个节点
      - parent.insertBefore(newNode, node.nextSibling) 

# 其他
1. replacedNode = parentNode.replaceChild(newChild, oldChild) 替换节点
2. var dupNode = node.cloneNode([deep]) 克隆节点
  - deep
    - true 则复制文本内容
    - false 默认，不复制文本内容
  