$(document).ready(function() {


  var pos = 0,
    test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
  var questions = [
    ["What is 10 + 4?", "12", "14", "16", "18", "B"],
    ["What is 12 + 4?", "12", "14", "16", "18", "C"],
    ["What is 14 + 4?", "12", "14", "16", "18", "D"],
    ["What is 10 + 2?", "12", "14", "16", "18", "A"]
  ];

  function renderQuestion() {
    test = $('#test')
    testStatus = $('#test_status')
    testStatus.html = "Question " + (pos + 1) + " of " + questions.length;

  }


}); //end of ready function