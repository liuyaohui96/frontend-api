// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
// "This Is Spinal Tap" => "this-is-spinal-tap"

/*
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

function spinalCase2(str) {
  // 小写字母紧接大写字母，然后在他们之间插入空格
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(/\s+|_/g, '-').toLowerCase();
}

let result = spinalCase('This Is Spinal Tap');
result = spinalCase2('This Is Spinal Tap');
console.log(result);
