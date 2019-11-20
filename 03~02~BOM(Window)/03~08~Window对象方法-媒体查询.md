
## Window对象方法-媒体查询
Window.matchMedia()返回一个新的MediaQueryList 对象，表示指定的媒体查询字符串解析后的结果

然后，可以使用返回的MediaQueryList确定文档是否与媒体查询匹配，或者监视文档以检测它何时匹配或停止匹配媒体查询
```js
const mediaQueryList = window.matchMedia(mediaQueryString)

// === 例子
let para = document.querySelector('p');

let mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

mql.addListener(screenTest);
```


## MediaQueryList 对象
MediaQueryList 参考：https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

MediaQueryList 对象的方法与属性：
1. MediaQueryList.matches ：MediaQueryList接口的matchs只读属性是一个布尔值，如果文档当前与媒体查询列表匹配，则返回true，否则返回false

    ```js
    // === MediaQueryList.matches 例子
    let mql = window.matchMedia('(max-width: 600px)');

    if(mql.matches) {
    // media query test returning true
    }
    ```

2. MediaQueryList.media: 将媒体查询以序列化的DOMString返回
