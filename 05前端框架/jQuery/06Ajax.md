$(selector).load(URL,data,callback) -> loads data from a server and puts the returned data into the selected element

```js
$("button").click(function(){
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
```
## get & post
> GET is basically used for just getting (retrieving) some data from the server. Note: The GET method may return cached data.

> POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.

$.get(URL,callback)
$.post(URL,data,callback)

```js
$("button").click(function(){
  $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

$("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
``` 