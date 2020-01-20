# Create element with React's createElement  API

```JavaScript
React.createElement('div', {className: 'container'}, 'hello world', 'good');
// 'hello world' is children1, 'good' is child 2

// 相当于
React.createElement('div', {className: 'container', children: ['hello world', 'good']});

```