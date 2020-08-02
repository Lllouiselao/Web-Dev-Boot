var userAge = prompt("How old are you?");
var lunaYear = userAge/4;
var normalYear = userAge - lunaYear;
var liveDay = lunaYear *366 + normalYear *365;

alert("You've almost live for " + liveDay);