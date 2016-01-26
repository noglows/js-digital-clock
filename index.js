var currentTime = function() {
  var now = new Date();
  var month = now.getMonth();
  var day = now.getDate();
  var year = now.getFullYear();
  var dayWeek = now.getDay();

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  month = monthNames[month];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var hour = now.getHours();

  if (hour >= 21) {
    boston_day = dayNames[dayWeek + 1];
  } else {
    boston_day = dayNames[dayWeek]
  }

  if (hour >= 15) {
    paris_day = dayNames[dayWeek + 1];
  } else {
    paris_day = dayNames[dayWeek]
  }

  if (hour >= 7) {
    kyoto_day = dayNames[dayWeek + 1];
  } else {
    kyoto_day = dayNames[dayWeek]
  }

  if (hour >= 5) {
    melbourne_day = dayNames[dayWeek + 1];
  } else {
    melbourne_day = dayNames[dayWeek]
  }

  if (hour > 12) {
    hour = hour - 12;
    time_of_day = "PM"
  } else {
    time_of_day = "AM"
  }


  dayWeek = dayNames[dayWeek];

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
    boston_time_of_day = "AM";
  } else if (boston_hour > 12) {
    boston_hour = boston_hour - 12;
    boston_time_of_day = "PM";
  } else if (boston_hour == 12){
    boston_time_of_day = "PM";
  } else {
    boston_time_of_day = "AM";
  }

  paris_hour = now_utc.getHours() + 1;
  if (paris_hour < 0) {
    paris_hour = 12 + paris_hour;
    paris_time_of_day = "AM";
  } else if (paris_hour > 12) {
    paris_hour = paris_hour - 12;
    paris_time_of_day = "PM";
  } else if (paris_hour == 12) {
    paris_time_of_day = "PM";
  } else {
    paris_time_of_day = "AM";
  }

  kyoto_hour = now_utc.getHours() + 9;
  if (kyoto_hour < 0) {
    kyoto_hour = 12 + kyoto_hour;
    kyoto_time_of_day = "AM";
  } else if (kyoto_hour > 12) {
    kyoto_hour = kyoto_hour - 12;
    if (kyoto_hour > 12) {
      kyoto_hour = kyoto_hour - 12;
      kyoto_time_of_day = "PM";
    } else {
      kyoto_time_of_day = "AM";
    }
  } else if (kyoto_hour == 12) {
    kyoto_time_of_day = "PM";
  } else {
    kyoto_time_of_day = "AM";
  }

  melbourne_hour = now_utc.getHours() + 11;
  if (melbourne_hour < 0) {
    melbourne_hour = 12 + melbourne_hour;
  } else if (melbourne_hour > 12) {
    melbourne_hour = melbourne_hour - 12;
    if (melbourne_hour > 12) {
      melbourne_hour = melbourne_hour - 12;
    }
  }


  document.getElementById('second').innerHTML = seconds;
  document.getElementById('minute').innerHTML = mins + ":";
  document.getElementById('hour').innerHTML = hour + ":";
  document.getElementById('date').innerHTML = month + " " + day + ", " + year;
  document.getElementById('day').innerHTML = dayWeek;
  document.getElementById('time-of-day').innerHTML = time_of_day;

  document.getElementById('boston-time').innerHTML = boston_hour + ":" + mins + ":" + seconds;
  document.getElementById('paris-time').innerHTML = paris_hour + ":" + mins + ":" + seconds;
  document.getElementById('kyoto-time').innerHTML = kyoto_hour + ":" + mins + ":" + seconds;
  document.getElementById('melbourne-time').innerHTML = melbourne_hour + ":" + mins + ":" + seconds;

  document.getElementById('boston-day').innerHTML = boston_day;
  document.getElementById('paris-day').innerHTML = paris_day;
  document.getElementById('kyoto-day').innerHTML = kyoto_day;
  document.getElementById('melbourne-day').innerHTML = melbourne_day;

  document.getElementById('boston-time-of-day').innerHTML = boston_time_of_day;
  document.getElementById('paris-time-of-day').innerHTML = paris_time_of_day;
  document.getElementById('kyoto-time-of-day').innerHTML = kyoto_time_of_day;
  // document.getElementById('melbourne-day').innerHTML = melbourne_day;
};

setInterval(function() { currentTime(); }, 1000);
