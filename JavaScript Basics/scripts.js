// alert("This is an alert");
// document.write("<h1>This is document.write();</h1>");
// var message = "What is your name?"
// var name = prompt(message);
// alert("Hello " + name + "!");


function getRandomNumber(){
  var randomNumber = Math.floor(Math.random()*6)+1;
 // alert(randomNumber);
  return randomNumber;
}

alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();