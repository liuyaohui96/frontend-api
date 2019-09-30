


```js

// ===== 位置操作

// ==== 打开新的url的方法
location.assign(url); // 打开一个新URL并在浏览器中生成历史记录
window.location = url;
location = href

location.replace(url) // 浏览器位置改变，不会产生历史记录


// ==== 重载
location.reload() // 如果页面没有改变，则从缓存加载
loaction.reload(true) // 强制从服务器加载
```

## 利用location.search获取查询字符串参数对象
```js
function getQueryStrObj(){
    if(!location.search.length) return {};
    let queryStr = location.search.substring(1)
    let ret = {};
    queryStr.split('&').forEach(item =>{
        let attr = decodeURIComponent(item.split('=')[0]);
        let value = decodeURIComponent(item.split('=')[1]);
        ret[attr] = value;
    })
    return ret;
}
```

## 位置操作
```js



```