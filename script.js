// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // Add event listener to save button
$(".saveBtn").on("click", function() {
  // Get the text area content and hour ID
  var text = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  // Save the data in local storage
  localStorage.setItem(hour, text);
});

  // TODO: Use jQuery to select the save buttons and add a click event listener to them.
  $('.saveBtn').on('click', function() {
    // TODO: Get the user input from the corresponding textarea element.
    var userInput = $(this).siblings('.description').val();
    
    // TODO: Get the id of the time-block containing the save button that was clicked.
    var timeBlockId = $(this).parent().attr('id');
    
    // TODO: Save the user input in local storage using the time-block id as the key.
    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // Get the current hour using Day.js
  var currentHour = dayjs().hour();
  
  // Loop over each time-block element
  $('.time-block').each(function() {
    // Get the id of the current time-block
    var timeBlockId = $(this).attr('id');
    
    // Get the hour from the time-block id
    var timeBlockHour = parseInt(timeBlockId.split('-')[1]);
    
    // Compare the time-block hour to the current hour and apply the appropriate class
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Loop over each time-block element
  $('.time-block').each(function() {
    // Get the id of the current time-block
    var timeBlockId = $(this).attr('id');
    
    // Get the user input from local storage using the time-block id as the key
    var userInput = localStorage.getItem(timeBlockId);
    
    // Set the value of the corresponding textarea element
    $(this).find('.description').val(userInput);
  });

  // TODO: Add code to display the current date in the header of the page.
  // get the current date and time using Day.js
var now = dayjs();
var currentDate = now.format("dddd, MMMM D");
var currentTime = now.format("h:mm A");

// update the current date and time in the HTML document
document.getElementById("currentDay").textContent = "Today is " + currentDate;
document.getElementById("currentTime").textContent = "The current time is " + currentTime;

  // Get the current date using Day.js
  var currentDate = dayjs().format('dddd, MMMM D');
  
  // Set the text of the header element to the current date
  $('.jumbotron').find('.lead').text(currentDate);
});
