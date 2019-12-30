
romise.prototype.finally() 方法返回一个Promise，在promise执行结束时，无论结果是fulfilled或者是rejected，在执行then()和catch()后，都会执行finally指定的回调函数。

```js
fetch('https://www.google.com')
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => { 
    console.log(error);
  })
  .finally(() => { 
    document.querySelector('#spinner').style.display = 'none';
  });
```

无论操作是否成功，当您需要在操作完成后进行一些清理时，finally()方法就派上用场了。这为指定执行完promise后，无论结果是fulfilled还是rejected都需要执行的代码提供了一种方式，避免同样的语句需要在then()和catch()中各写一次的情况。