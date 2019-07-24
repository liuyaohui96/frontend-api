## 使用IndexDB
IndexDB是大型存储系统，它使用对象存储，可以使用索引检索数据。
* 与域名一一对应
* 通常浏览器不会明确定义存储限制，当存储空间低于某个标准的时候，浏览器就会清除其他IndexDB实例，根本上说，存储的数据不是永远存在的。

> IndexDB 所有的数据操作都是异步的
## 检查对IndexDB的支持
```js
if(window.indexDB){
  // ...
}
// 注意，IOS8对IndexDB的支持存在严重的问题
```

## 创建数据库请求对象并监听事件
```js
// version 是版本号，通常版本号从1开始，可以使任意的值
// 返回一个请求对象，在上面可以添加事件监听
let openRequest = indexedDB.open(databaseName, version)

// 第一次使用请求指定的数据库或者版本号发生改变时触发
openRequst.onupgradeneeded = function(e){
  // ...
}
openRequst.onsuccess = function(e){
  // ...
}
openRequst.error = function(e){
  // ...
}
```

## 创建存储对象
```js
// db.objectStoreNames.contains
// db.createObjectStore('person')
let databaseName = 'website'
let version = 1
let openRequest = indexedDB.open(databaseName, version)
openRequest.onupgradeneeded = function(e){
  let db = e.target.result // 取得数据库本身
  // 如果指定数据库没有包含了person对象
  if(!db.objectStoreNames.contains('person')){
    // 可以使用keypath确保属性的唯一性，即设置key
    let objStore = db.createObjectStore('person')
    // db.createObjectStore('person', {keypath: 'id', autoIncrement: true})
    // db.createObjectStore('person', {keypath: 'id'})
    // db.createObjectStore('person', {multiEntry: true})
    
    // ==== 建立索引，第一个参数是索引名称
    // 第二个参数是索引的属性名
    // 第三个为选项，有两个：
      // 一个unique设置唯一性
      // 另一个参数multiEntry用于数组，指是否映射数组的每一项的值
    objStore.createIndex('gender', 'gender', {unique: true})
    // objStore.createIndex('hobbies', 'hobbies', {unique: true, multiEntry: true})
  }
}
openRequest.onsuccess = function(e){
  // ...
}
openRequest.error = function(e){
  // ...
}
```

## 操作数据
所有数据操作都是在事务中完成的，为了保持一致性，事务中的某个操作出现了问题，所有操作都会发生回滚。
1. store.add(data) 或者 store.add(data, somekey)
2. store.get(primarykey)
3. store.put(data) 或 store.put(data, primarykey)
4. store.delte(primarykey)
```js
// onupgrateneeded 负责创建数据库和对象
// onsuccess 负责处理DOM事件，操作数据库和对象

// ====== 仅举例 insert
// 取得事务
let transaction = db.transactioin(['person'], 'readwrite')
let store = transaction.objectStore('person')
let request = store.add(data);
request.success = function(e){
  // ...
}
request.error = function(e){
  // ...
}
```

## 获取所有数据
IndexDB使用游标(cursor)遍历对象中的数据，游标也是在事务内使用
```js
let transaction = db.transaction(['test'], 'readonly')
let store = transaction.objectStore('test')
let cursor = objectStore.openCursor()

cursor.onsuccess = function(e){
  let res = e.target.result
  if(res){
    res.continue()
  }
}

```

## 创建范围
在索引上打开游标就是范围
```js
let lower = 'A'
let upper = 'D'
// range
let range = IDBKeyRange.bound(lower, upper)
// IDBKeyRange.lowerBound(lower)
// IDBKeyRange.upperBound(upper)



let transaction = db.transaction(['test'], 'readonly')
let store = transaction.objectStore('test')
let index = store.index(indexName)

index.openIndex(range).onsuccess = function(e){
  let cursor = e.target.result
  // ...
}
```

## 计算存储数据的数据量
```js
db.transaction(['test'], 'readonly').objectStore('test)
  .count().onsuccess = function(e){
    console.log(e.target.result)
  }
``