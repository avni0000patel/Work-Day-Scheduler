// Moment.js is used to display the current day at the top of the calander
var today = moment();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Each time block is color-coded to indicate whether it is in the past, present, or future
function color() {
    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlock);

        // Remove classes
        $(this).removeClass("present past future");

        // Add classes
        if (currentTime > timeBlock) {
            $(this).addClass("past");
        } else if (currentTime < timeBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

    })
}

color();