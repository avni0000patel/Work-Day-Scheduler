// Moment.js is used to display the current day at the top of the calander
var today = moment();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));