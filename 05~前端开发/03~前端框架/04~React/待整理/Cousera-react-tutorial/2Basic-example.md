## basic example
```JavaScript
// app.js

// Components are made of elements
// ES6 class difiniton
import React, {Component} from 'react'; // 导入函数
import './App.css'; // 导入类
import './logo.svg'; // 图片导入
class App exteneds Component{
    reander(){
        return(
            <h1 className="hello">hello world</h1> // className not class
            ...
        )
    }
}

export default App; // 将这个类默认导出

```

```JavaScript
// index.js

import React from 'react';
import ReactDOM form 'react-dom';
import App from './App'; // 默认是js文件，不用添加扩展
ReatDom.render(
    <App />, document.getElementById('root')
)
```