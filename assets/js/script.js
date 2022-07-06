// Moment.js is used to display the current day at the top of the calander
var today = moment();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Each time block is color-coded to indicate whether it is in the past, present, or future
function color() {
    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function () {
        // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlock);

        // Remove classes
        $(this).removeClass("past future present");

        // Add classes
        if (currentTime > timeBlock) {
            $(this).addClass("past");
        } else if (currentTime < timeBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
};

color();

// The text for that event is saved in local storage when I click the save button for that time block and the saved events persist when I refresh the page 
$("document").ready(function () {
    $(".saveBtn").click(function () {
        console.log(this);

        // The siblings() method returns all sibling elements of the selected element.
        // Sibling elements are elements that share the same parent.
        var text = $(this).siblings(".description").val();
        console.log(text);

        // The parent() method returns the direct parent element of the selected element.
        var time = $(this).parent().attr("id");
        console.log(time);

        // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
        localStorage.setItem(time, text);
    })

    // The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});