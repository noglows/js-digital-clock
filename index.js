// Your code here

//
var currentTime = function() {
  var now = new Date();
  var month = now.getMonth();
  var day = now.getDate();
  var year = now.getFullYear();
  var dayWeek = now.getDay();

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  month = monthNames[month];

  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  dayWeek = dayNames[dayWeek]

  var hour = now.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }

  var mins = now.getMinutes();
  if (mins < 10) {
    mins = "0" + mins;
  }

  var seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById('second').innerHTML = seconds;
  document.getElementById('minute').innerHTML = mins + ":";
  document.getElementById('hour').innerHTML = hour + ":";
  document.getElementById('date').innerHTML = month + " " + day + ", " + year
  document.getElementById('day').innerHTML = dayWeek
};

setInterval(function() { currentTime(); }, 1000);
