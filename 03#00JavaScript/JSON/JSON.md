## 交换数据
client 和 server 之间交换数据，数据只能是text。JSON是text，client可以将JavaScript的对象转换为JSON发送到server，同样，server也可以将JSON发送到到client, client转换为JavaScript对象进行处理。

> client 客户端，server为服务器

## JSON语法格式
JSON 被写为一个key/value，key必须用双引号包围
```js
// json 格式
{
  "name": "john"
}
```

## JSON数据类型
1. string
2. number
3. boolean
4. null
5. object(JSON object)
6. array

> 注意: JSON的value值不能是undefined, function,date
> JSON 的 array中的元素可以是string, number, null， boolean，object, array

```js
{ "name":"John" } // json string

{ "age":30 } // json number

{ "sale":true } // json boolean

{ "middlename":null } // json null

{
"employee":{ "name":"John", "age":30} // json object
}

{
"employees":[ "John", "Anna"] // json array
}
```


## 常用方法
1. JSON.stringify(objectFromClient)     
  常用于将浏览器的javascript对象转换为JSON
2. JSON.parse(jsonFromServer)       
  常用于将服务器的JSON数据转换为javascript对象

3. 对于JSON对象的属性访问,修改，删除，遍历与javascript一样。
  ```js
  myObj = { "name":"John", "age":30, "car":null };
  myObj.name; // john
  myObj["name"]; // john

  myObj.name = 'mary'; // modify
  for( x in myObj){
    myObj[x]; // must use [] syntax
  }
  delte myObj.name // delete a key
  ```

## JSON文件
JSON文件后缀名为.json,JSON的MIME type 是 `application/json`