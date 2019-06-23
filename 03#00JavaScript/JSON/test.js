myObj = { name: 'John', age: 30, car: null };
myObj.name; // john
myObj['name']; // john

myObj.name = 'mary'; // modify
for (x in myObj) {
  console.log(myObj[x]); // must use [] syntax
}
