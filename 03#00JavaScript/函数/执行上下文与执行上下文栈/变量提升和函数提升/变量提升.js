function sayHi() {
  console.log(name); // undefined
  console.log(age); // refreence error
  var name = 'Lydia';
  let age = 21;
}

sayHi();
