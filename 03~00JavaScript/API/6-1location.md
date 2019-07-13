location
1. window.location === location == window.document.location
2. BOM对象之一，提供文档有关信息和导航功能。可以看作是浏览器的地址栏

## 常用属性
1. href 整个url
2. protocol 协议
3. host 主机号：端口号 浏览器默认端口号8080
4. hostname 主机号 port 端口号
5. pathname 路径
6. search 查询字符串
7. hash 描点

## 常用方法
1. location.assign(url) 跳转到指定url
2. location.reload(boolean) 
  - true 强制重载 忽略缓存 从服务器重载
  - 从Http缓存重载
3. location.replace(url) 用新url代替旧url，避免产生跳转前的历史记录