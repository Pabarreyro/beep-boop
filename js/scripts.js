// Business logic

function findRange(number) {
  var rangeArray = [];

  for (var i = 0; i <= number; i++) {
    rangeArray.push(i.toString());
  }
  return rangeArray;
};

function replaceNumbers(array) {
  var newArray = array.map(function(element){
    if (element > 3 && element % 3 === 0) {
      return "<em>I'm sorry, Dave. I'm afraid I can't do that.</em>";
    } else if (element.match(/1/)) {
      return "<em>Boop!</em>";
    } else if (element.match(/0/)) {
      return "<em>Beep!</em>";
    } else {
      return element;
    }
  });

  return newArray;
};

function hal9000(number){
  var rangeArray = findRange(number);
  var outputArray = replaceNumbers(rangeArray);

  return outputArray;
}

// User logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input").val();
    var backendOutput = hal9000(userInput);

    $("#output").empty();
    $("#output-box").toggleClass("empty");
    backendOutput.forEach(function(element){
      if (element.match(/Dave\./)) {
        $("#output").append("<li class='dave'>"+ element + "</li>");
      } else if (element.match(/B[eo]+p!/)){
        $("#output").append("<li class='beep_boop'>"+ element + "</li>");
      } else {
        $("#output").append("<li>"+ element + "</li>");
      }
    });
  });

  $(".reset").click(function() {

    $("#output").empty();
    $("#output-box").toggleClass("empty");
  })
});
