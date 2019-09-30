
## navigator 对象
可以使用只读的 window.navigator 属性检索navigator对象，该对象描述关于浏览器的信息

## 获取浏览器产品信息
```js
// 返回所使用浏览器的内部名称.
// 由于考虑到兼容性，基本所有都会返回"Mozilla"
codeName = window.navigator.appCodeName

/* === 返回浏览器名称
IE11, Firefox, Chrome and Safari returns "Netscape"
IE 10 and earlier versions return "Microsoft Internet Explorer"
Opera returns "Opera"
*/
navigator.appName 

// 返回关于浏览器的版本信息
navigator.appVersion

// 浏览器的引擎
// All browsers returns "Gecko"
navagator.product

// 返回当前浏览器的用户代理（user agent）字符串
// 包括浏览器的appName, appVersion, platform
navigator.userAgent

navigator.vendor // 浏览器品牌
```
## navigatro属性
```js
// 回一个布尔值，来表示当前页面是否启用了 cookie。本属性为只读属性
navigator.cookieEnabled

// 只读属性返回一个 Geolocation 对象，通过这个对象可以访问到设备的位置信息
// 于安全考虑，当网页请求获取用户位置信息时，用户会被提示进行授权
// Windows10在未开启定位的情况下无法获取位置
navigator.geolocation

// 通常获取浏览器的界面语言
navigator.language

// 浏览器是否在线
navigator.online 

// 浏览器在哪个平台运行
// Win16 Win32 Linux i686 ....
navigator.platform
```