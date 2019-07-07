## transition
参考文档： https://cssreference.io/property/transition/

Shorthand property for `transition-property transition-duration transition-timing-function and transition-delay`.

Only `transition-duration` is required

> timing-function: linear | ease | ease-in | ease-out | ease-in-out 
> 第一个时间属性为transition, 第二个time是transition-delay
> 
```js
// transition-duration is set to 1s
// transition-property defaults to all
// transition-timing-function defaults to ease
// transition-delay defaults to 0s
transition: 1s;

transition: 1s linear;
// ransition-property is set to background
transition: background 1s linear;

// transition-duration is set to 1s
// transition-property defaults to background
// transition-timing-function defaults to linear
// transition-delay defaults to 500ms
transition: background 1s linear 500ms;

//combine multiple properties with their own transition duration
transition: background 4s, transform 1s;
```



