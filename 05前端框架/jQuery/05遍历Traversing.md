## Ancestors祖先
1. $(selector).parent() -> returns the direct parent element of the selected element
2. $(selector).parents() -> returns all ancestor elements of the selected element
4. $(selector)parentsUntil() -> returns all ancestor elements between two given arguments
  ```js
  $("span").parentsUntil("div");
  ```

## Descendants后代
1. $(selector).children() -> returns all direct children of the selected element
  ```js
  // eturns all <p> elements with the class name "first"
  $("div").children("p.first");
  ```
2. $(selector).find() -> returns descendant elements of the selected element
  ```js
  $("div").find("span");
  ```
## Siblings兄弟
1. $(selector).siblings() -> returns all sibling elements of the selected element
2. $(selector).next() -> returns the next sibling element of the selected element
3. $(selector).nextAll() -> returns all next sibling elements of the selected element
4. $(selector).nextUntil() -> returns all next sibling elements between two given arguments
5. $(selector).prev(), $(selector).prevAll(), $(selector).prevUntil()

## filter筛选
1. $(selector).first() -> returns the first element of the specified elements
2. $(selector).last() -> returns the last element of the specified elements
3. $(selector).eq() -> returns an element with a specific index number of the selected elements, index numbers start at 0
4. $(selector).filter() -> returns the matched elements
5. $(selector).not() -> returns all elements that do not match the criteria

```js
//  all <p> elements with class name "intro"
$("p").filter(".intro");

// all <p> elements that do not have class name "intro":
$("p").not(".intro");
```
  