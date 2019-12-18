使用nginx反向代理实现跨域，只需要修改nginx的配置即可解决跨域问题

A网站向B网站请求某个接口时，向B网站发送一个请求，nginx根据配置文件接收这个请求，代替A网站向B网站来请求。 nginx拿到这个资源后再返回给A网站，以此来解决了跨域问题


例如nginx的端口号为 8090，需要请求的服务器端口号为 3000。（localhost:8090 请求 localhost:3000/say）

```js
server {
    listen       8090;

    server_name  localhost;

    location / {
        root   /Users/liuyan35/Test/Study/CORS/1-jsonp;
        index  index.html index.htm;
    }
    location /say {
        rewrite  ^/say/(.*)$ /$1 break;
        proxy_pass   http://localhost:3000;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    }
    # others
}
```

## api
```shell
location / {
   # 检查域名后缀
    add_header Access-Control-Allow-Origin xx.xx.com;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    add_header Access-Control-Allow-Credentials true;
    add_header Access-Control-Allow-Headers DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type;
    add_header Access-Control-Max-Age 86400;
}
```