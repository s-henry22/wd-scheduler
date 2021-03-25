var day = moment().format("MM/DD/YYYY"); // Display current day
//console.log(day);

$('#currentDay').html(day); // Add current day to html

// Add text input to hour blocks.
$(".hour-description").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
