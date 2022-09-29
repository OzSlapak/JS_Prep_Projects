import { sub, add, name, area, palindromeForStrings as andy } from "./script.js"
let newNum = add(100, 200) + 300
function BMI(weight) {
  return weight + sub(weight, 10)
}
function volume(a, b, c) {
  return area(a, b) * c
}
// console.log(name)
// console.log(newNum)
// console.log(volume(2, 3, 4))
const input = document.querySelector("#text")
const button = document.querySelector("#button")
const headerText = document.querySelector("#main")
button.addEventListener("click", function () {
  let inputText = input.value
  let palindromeOutput = andy(inputText)
  headerText.textContent = palindromeOutput
})