//Please develop a web based calculator following the backlog below. Do not spend more than 3h on this challenge. This won’t be enough time to solve the task so decide on your own how to compromise quality vs. quantity. Please use git for this task so progress can be followed easily and add a README.md so new developers know where to start. All other tools and frameworks are up to you.
//
//- As a user I need a statistical calculator
//
//- As a user I would like to enter an arbitrary large series of real numbers on a keypad
//
//- As a user I would like to add this number to a list of numbers
//
//- As a user I would like to clear the complete list
//
//- As a user I would like to clear the number which is currently in the display
//
//- As a user I would like to compute the sum of the list of numbers
//
//- As a user I would like to compute the mean value of the list of numbers
//
//- As a user I would like to compute the mean value of the numbers squared in the list
//
//- As a user I would like to negate individual numbers in the list
//
//- As a user I would like to compute the variance of the numbers in the list
let number =[];
let list =[];
let current ="";

$(".digit").click(function(){
    number.push($(this).attr("name"));
    let string = number.join("");
    $("#num_input").val(string);
})

$("#cancel").click(function(){
    $("#num_input").val(" ");
    number=[];
})

$("#send").click(function(){
    // clear the number used so far, so it won't reappear by clicking the digit buttons
    number =[];
    // use the value of the input to have the current number
    current = $("#num_input").val();
    $("#current").html("Current number: " + current);
    // put the current number in a list
    list.push(current);
    let item = $("<li>").html(current);
    $("#num_list").append(item);
    
    
    //clear the current input value
    $("#num_input").val(" ")

})




