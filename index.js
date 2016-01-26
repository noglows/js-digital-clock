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

  // var bostonHour = hour + 3;
  // var parisHour = hour + 9;
  // var kyotoHour = hour + 17;
  // var melbourneHour = hour + 19;

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

  var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

  boston_hour = now_utc.getHours() - 5;
  if (boston_hour < 0) {
    boston_hour = 12 + boston_hour;
  } else if (boston_hour > 12) {
    boston_hour = boston_hour - 12;
  }

  paris_hour = now_utc.getHours() + 1;
  if (paris_hour < 0) {
    paris_hour = 12 + paris_hour;
  } else if (paris_hour > 12) {
    paris_hour = paris_hour - 12;
  }

  kyoto_hour = now_utc.getHours() + 9;
  if (kyoto_hour < 0) {
    kyoto_hour = 12 + kyoto_hour;
  } else if (kyoto_hour > 12) {
    kyoto_hour = kyoto_hour - 12;
  }

  melbourne_hour = now_utc.getHours() + 11;
  if (melbourne_hour < 0) {
    melbourne_hour = 12 + melbourne_hour;
  } else if (melbourne_hour > 12) {
    melbourne_hour = melbourne_hour - 12;
  }


  document.getElementById('second').innerHTML = seconds;
  document.getElementById('minute').innerHTML = mins + ":";
  document.getElementById('hour').innerHTML = hour + ":";
  document.getElementById('date').innerHTML = month + " " + day + ", " + year;
  document.getElementById('day').innerHTML = dayWeek;

  document.getElementById('boston-time').innerHTML = boston_hour + ":" + mins + ":" + seconds;
  document.getElementById('paris-time').innerHTML = paris_hour + ":" + mins + ":" + seconds;
  document.getElementById('kyoto-time').innerHTML = kyoto_hour + ":" + mins + ":" + seconds;
  document.getElementById('melbourne-time').innerHTML = melbourne_hour + ":" + mins + ":" + seconds;
};

setInterval(function() { currentTime(); }, 1000);
