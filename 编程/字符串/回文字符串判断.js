function isPalindromes(str) {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  )
}

console.log(isPalindromes('abcba')) // true
console.log(isPalindromes('abc')) // false
