
## 移除addEventListener
```js
// 例子1
element.addEventListener("mousedown", handleMouseDown, true);

// Fails
element.removeEventListener("mousedown", handleMouseDown, false);     
// Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);      
```

```js
// 例子2
element.addEventListener("mousedown", handleMouseDown, { passive: true });

// Succeeds
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     

// Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });  

// Fails 
element.removeEventListener("mousedown", handleMouseDown, { capture: true });

// Succeeds     
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    

// Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                
 // Fails 
element.removeEventListener("mousedown", handleMouseDown, true);      
```