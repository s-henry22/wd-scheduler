var day = moment().format("MM/DD/YYYY"); // Display current day
//console.log(day);

$('#currentDay').html(day); // Add current day to html

// Add text input to hour blocks.
$(".hour-description").on("click", "p", function () {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");

});

//store to local storage
    /*var myTask = JSON.stringify($(".hour-description"));
    console.log(myTask);*/


// Change hourly block colour based on current time of day
function colorChange() {
    var d = new Date();
    var n = d.getHours()+1;
    //console.log(n);

    if (n > 17 || n < 9) {
        // If time is after 5PM or before 9AM, apply night theme to hour text
        $(".hour-block").addClass("night").removeClass("daytime");
    } else {
        // Apply the day theme
        $(".hour-block").addClass("daytime").removeClass("night");
    }
}

colorChange();

// save text to local storage when save button is clicked
/*$(".save").on("click", "button",function() {
    var str = JSON.stringify($(".hour-description"));
    localStorage.setItem("text", str);
    console.log(function

});*/
