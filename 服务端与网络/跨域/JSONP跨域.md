尽管浏览器有同源策略，同源策略允许跨域资源嵌入（Cross-origin embedding）,所以 <script> 标签的 src 属性不会被同源策略所约束, 利用script标签的src属性来实现跨域。

优点：兼容性好   
缺点：只支持GET请求
## 实现原理
```js
<script type="text/javascript">
    function dosomething(data){
        //处理获得的数据
    }
</script>
<script src="http://example.com/data.php?callback=dosomething"></script>
```

