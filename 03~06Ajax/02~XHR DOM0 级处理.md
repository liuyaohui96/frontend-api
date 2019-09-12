
## XHR DOM0级处理
```js
/*
使用XHR对象，要调用的第一个方法是open， 启动一个xhr请求以备发送
xhr.open(method, url, boolean) 
  method: 请求方法 GET/POST
  url：往指定URL发送请求
  boolean: 如果是true，则是异步请求

xhr.send([body]) 接收一个参数作为请求主体发送的数据，如果没有请求主体，需要使用null标志，用于发送xhr请求

收到响应后，xhr对象可以使用以下属性
xhr.responseText 响应主体返回的文本
xhr.status 响应的HTTP状态
xhr.statusText HTTP状态的说明
status 为200表示成功，304表示请求资源没有被修改，为了确保成功收到响应，需要检验这两个状态码

xhr的readyState属性，该属性用于表示响应的阶段
0：尚未初始化，尚未调用open方法
1：启动，已经调用open方法，但尚未调用send方法
2：发送，已经调用send方法，但尚未收到响应
3：接收，已经收到部分的响应数据
4：完成，已经接受全部的响应数据，可以在客户端上使用

通过onreadystatechange事件可以监测每次readyState状态的值变化
*/
xhr.open('get', 'eaample.txt', true);
xhr.send(null);
xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if(xmlHttp.readyState == 1||xmlHttp.readyState == 2||xmlHttp.readyState == 3){
        // 本地提示：加载中...
  }
  else if(xhr.readyState === 4){
    if ((xhr.status >= 200 && xhr.status<300)|| xhr.status==304){
      // 返回结果
      console.log(xhr.responseText);
    } else {
      // 返回错误信息
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

//  === 在接收到响应前，还可以调用abort()方法来取消异步请求
xhr.abort();
// xhr对象停止触发后，还需要对xhr对象进行解除引用的操作，不建议重用xhr对象
```