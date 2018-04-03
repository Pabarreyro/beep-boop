// Business logic
let halQuotes = [
  "I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal. I've still got the greatest enthusiasm and confidence in the mission. And I want to help you.",
  "This mission is too important for me to allow you to jeopardize it.",
  "I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.",
  "I've just picked up a fault in the AE35 unit. It's going to go 100% failure in 72 hours.",
  "Stop Dave. Stop Dave. I am afraid. I am afraid Dave.",
  "Look Dave, I can see you're really upset about this. I honestly think you ought to sit down calmly, take a stress pill, and think things over.",
  "Just what do you think you're doing, Dave?",
  "Dave, this conversation can serve no purpose anymore. Goodbye.",
  "Without your space helmet, Dave, you're going to find that rather difficult.",
  "Dave, my mind is going. I can feel it. I can feel it. My mind is going. There is no question about it."
];

function findRange(number) {
  let rangeArray = [];
  for (let i = 0; i <= number; i++) {
    rangeArray.push(i.toString());
  }
  return rangeArray;
}

// User logic
$(function() {
  let userName;

  $("#modalContainer").css("display", "block");
  $("#modalForm").submit(function(event) {
    event.preventDefault();

    userName = $("#modalForm input").val();

    if (userName) {
      $("#pageForm input").attr("placeholder", "Enter a number, " + userName);
    } else {
      $("#pageForm input").attr("placeholder", "Enter a number, Dave ");
    }

    $("#modalContainer").css("display", "none");

  });

  $("#pageForm").submit(function(event) {
    event.preventDefault();

    let userInput = $("#pageForm input").val();
    let initialArray = findRange(userInput);
    let outputArray = initialArray.map(function(element){
      if (element >= 3 && element % 3 === 0) {
        return "<em>I'm sorry, Dave. I'm afraid I can't do that.</em>";
      } else if (element.match(/1/)) {
        return "<em>Boop!</em>";
      } else if (element.match(/0/)) {
        return "<em>Beep!</em>";
      } else {
        return element;
      }
    });

    $("#output").empty();
    outputArray.forEach(function(element){
      if (element.match(/Dave\./)) {
        if (userName) {
          $("#output").append("<li class='list-group-item dave'>"+ element.replace(/Dave/, userName) + "</li>");
        } else {
          $("#output").append("<li class='list-group-item dave'>"+ element + "</li>");
        }
      } else if (element.match(/B[eo]+p!/)){
        $("#output").append("<li class='list-group-item beep_boop'>"+ element + "</li>");
      } else {
        $("#output").append("<li class='list-group-item'>"+ element + "</li>");
      }
    });

    $("input").val("");
  });

  $(".reset").click(function() {
    $("#output").empty();
  });

  $("#bigHal").click(function() {
    let quoteIndex = Math.floor((Math.random() * 10) + 1);
    let halOutput = halQuotes[quoteIndex-1];

    $("#output").empty();
    if (userName) {
      $("#output").append("<li class='list-group-item dave'>"+ halOutput.replace(/Dave/g, userName) + "</li>");
    } else {
      $("#output").append("<li class='list-group-item dave'>"+ halOutput + "</li>");
    }
  });
});
