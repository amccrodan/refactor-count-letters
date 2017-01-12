function countLetters(inputString) {
  stringObj = {};

  inputString.split('').reduce(function (a, b) {
    stringObj[b] = (!stringObj[b]) ? 1 : stringObj[b] + 1;
  }, 0);

  return stringObj;
}

console.log(countLetters('This is a test'));