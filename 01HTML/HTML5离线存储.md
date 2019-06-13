# 应用程序缓存（Application Cache）


HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问

manifest是一个后缀名为minifest的文件，在文件中定义那些需要缓存的文件，支持manifest的浏览器，会将按照manifest文件的规则，像文件保存在本地，从而在没有网络链接的情况下，也能访问页面

## Manifest的特点
* 离线浏览: 用户可以在离线状态下浏览网站内容。
* 更快的速度: 因为数据被存储在本地，所以速度会更快.
* 减轻服务器的负载: 浏览器只会下载在服务器上发生改变的资源。

HTML5 Cache Manifest 实例
```html
<!DOCTYPE HTML>
<html manifest="demo.appcache">
  ...
```
