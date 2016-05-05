var body = document.getElementsByTagName("body")[0];
var test = document.createElement('div');


question = {
text: "What is the question?",
answers: [
  {answer: "Answer is 1",
   flag: true},
  {answer: "Answer is 2",
    flag: false},
  {answer: "Answer is 3",
    flag: false}
],
 getQuestion: function (name) {
 var list = "";
 for (i = 0; i < this.answers.length; i++) {
   list += '<li><input type = "checkbox" name = "myname">' + this.answers[i].answer + ' </li>'
 }

  return '<h1>' + this.answer + name + '</h1><ul>' + list + '</ul>';
 }
};

body.appendChild(test);

for (i = 0; i < 4; i++) {
 test.innerHTML = test.innerHTML + question.getQuestion(i);
}
