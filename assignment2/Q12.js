function checkRegEx(s) {
  return Object.prototype.toString.call(s) === "[object RegExp]";
}
let s = /aba/;
console.log(checkRegEx(s));