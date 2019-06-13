// 如何让：a == 1 && a == 2 && a == 3

const a = {
  value: [3, 2, 1],
  valueOf: function() {
    return this.value.pop()
  }
}
