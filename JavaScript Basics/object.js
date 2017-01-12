var person = {

  name: "Sarah",
  country: "US",
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'CSS']
};

function print(message){
  var div = document.getElementById('output');
  div.innerHTML = message;

}

var message = '<p>Hello, My name is ' + person.name;
print(message);

for (var propName in student){

	console.log(propName);
	console.log(student[propName]);
}