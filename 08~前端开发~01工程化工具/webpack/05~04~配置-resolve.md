
## Resolve 
Resolve 配置模块如何被解析

## resolve.alias
创建`import | export `的别名，使得模块导入更加简单

```js
resolve: {
  alias: {
    component: './src/components/';
  }
}

import button from 'components/button'
// 会被替换为
import button from './src/components/button'

// 如果不想被命中为太多的导入语句，可以通过$符号提高命中的精确度
resolve: {
  alias: {
    component$: './src/components/';
  }
}

``` 

## resolve.extension
导入语句没有带文件后缀时，webpack自动使用resolve.extension指定的后缀去询问文件是否存在
```js
// === array
// 默认值
resolve: {
  extension: ['js', 'json']
}
```

## resolve.enforceExtension
如果配置为true，所有的导入语句都需要待文件后缀
```js
// 默认
resolve: {
  enforceExtension: false;
}
```


## resolve.modules
配置webpack去哪些目录下寻找第三方模块，默认只会去node_modules目录下寻找，
```js
// === 如果有大量的其他模块在需要在非node_modules目录下引入，需要自定义resove.modules模块下的规则
resolve: {
  modules: ['./src/components', 'node_modules']
}
```

## resolve.descriptionFile
配置第三方模块的JSON描述文件
```js
resolve:{
  descriptionFiles: ["package.json"]
}
```