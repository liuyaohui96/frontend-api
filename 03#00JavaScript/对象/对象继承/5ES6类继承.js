class Parent {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log('parent name: ', this.name);
  }
}

class Child extends Parent {
  constructor(childName, parentName) {
    super(parentName);
    this.childName = childName;
  }
  sayHello() {
    console.log('child name ', this.childName);
  }
}

let child = new Child('liu', `liu's parent`);
child.sayHello(); // child name  liu
child.sayHi(); // parent name:  liu's parent
