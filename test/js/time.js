// Get the current time
var date = new Date();

// Get the hours and minutes
var hours = date.getHours();
var minutes = date.getMinutes();

// Convert hours from 24 to 12 hour format
var timeFormat = "AM";
if (hours > 12) {
hours = hours - 12;
timeFormat = "PM";
}

// Pad minutes with leading zero if needed
minutes = minutes < 10 ? "0" + minutes : minutes;

// Concat hours, minutes and AM/PM
var strTime = hours + ":" + minutes + " " + timeFormat;

// Display on website
document.getElementById("time").innerHTML = strTime;

Then in your HTML:

<div id="time"></div>
