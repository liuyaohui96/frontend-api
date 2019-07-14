function sayHi() {
  console.log(name); // undefined
  console.log(age); // refreence error
  var name = 'Lydia';
  let age = 21;
}

sayHi();

// =======
console.log(hoist);
var hoist = 'value';

myFunction(); // No error; logs "hello"
function myFunction() {
  console.log('hello');
}
