var search = prompt('Enter first name of student or \'quit\' to end: ');

var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (search !== 'quit'){
       for (var i = 0; i < students.length; i += 1) {
        student = students[i];
        if (students[i].name === search){
          student = students[i];
          message += '<h2>Student: ' + student.name + '</h2>';
          message += '<p>Track: ' + student.track + '</p>';
          message += '<p>Points: ' + student.points + '</p>';
          message += '<p>Achievements: ' + student.achievements + '</p>';
          print(message);
          message="";
          search = prompt('Enter first name of student or \'quit\' to end: ');
      }
  }
}
