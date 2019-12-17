var o = {
  a: 7,
  get b() {
    return this.a - 1;
  },
  set b(x) {
    this.a = x + 10;
  }
};

o.b = 10;
console.log(o.b);
