     // Part 1
var base = prompt("Enter the value");
var exponent = prompt ("Enter the power value");

function myFunction() {
    var a = Math.pow(base, exponent);
    // document.getElementById("demo").innerHTML = a;
    console.log('a', a);
};



     // Part 2
var names = [];

for (var i = 0; i < 5; i++) {
names.push(prompt("Enter some name"));
alert(names);
};

var userName = prompt("Please, enter your username");
for (var i = 0; i < 1; i++) {
  if (userName == names[0]) {
     alert('Welcome' + ', ' + userName);
      }
   else if (userName == names[1]) {
      alert('Welcome' + ', ' + userName);
      }
   else if (userName == names[2]) {
      alert('Welcome' + ', ' + userName);
      }
    else if (userName == names[3]) {
      alert('Welcome' + ', ' + userName);
      }

    else if (userName == names[4]) {
      alert('Welcome' + ', ' + userName);
      }
    else if (userName == names[5]) {
      alert('Welcome' + ', ' + userName);
      }
    else {
      alert('Error');
      };

};
