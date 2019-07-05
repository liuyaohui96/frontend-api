//
function test(num) {
  let rt = 0;
  while (num != 0) {
    let pop = num % 10;
    num = Math.floor(num / 10);
    rt = rt * 10 + pop;
  }
  return rt;
}

console.log(test(123));
console.log(test(-123));
