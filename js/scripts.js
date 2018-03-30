//Business logic

function findRange(number) {
  var rangeArray = [];

  for (var i = 0; i <= number; i++) {
    rangeArray.push(i.toString());
  }
  return rangeArray;
};

function replaceNumbers(array) {
  newArray = array.map(function(element){
    if (element.match(/1/)) {
      return "<em>Boop!</em>";
    } else if (element.match(/0/)) {
      return "<em>Beep!</em>";
    } else {
      return element;
    }
  });

  return newArray;
};

testNumber = 10;
testArray = findRange(testNumber);
console.log(testArray);
testArrayReplace0 = replaceNumbers(testArray);
console.log(testArrayReplace0);
