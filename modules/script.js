function add(num1, num2) {
    return num1 + num2
  }
  function sub(num1, num2) {
    return num1 - num2 * 10
  }
  function area(a, b) {
    return a * b
  }
  function palindromeForStrings(str) {
    if (str === str.split('').reverse().join('')) {
      return "palindrome"
    }
    return "not a palindrome"
  }
  const name = "Google"
  export { name };
  export { add, sub, area, palindromeForStrings };
  //allows you to split codes into separate files
  //makes code easily maintaibable,