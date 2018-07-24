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
    // put the current number in a list and the array
    list.push(current);
    
    let item = $("<li>");
    let negate_btn = $("<button>").attr("class", "no_btn").html("Don't count")
    $(item).attr("class", "list_item").html(current);
    $(item).append(negate_btn);
    $("#num_list").append(item); 
    //clear the current input value
    $("#num_input").val(" ")

})

//clear the complete list

$("#clear_all").click(function(){
    $(".list_item").each(function(){
        list = [];
        $("#current").html("Current number :")
        $("#sum").html("Sum: ");
        $("#mean").html("Mean: ");
        $("#sqr_mean").html("Square Mean: ");
        $(this).remove();
    })
})

//clear the current number
$("#clear_current").click(function(){
    $("#current").html("Current number :")
})

$("#sum_it").click(function(){
    let that = $(this);
    sum(list, that);
})

$("#get_mean").click(function(){
    let that = $(this);
    mean(list, that);
})

$("#get_sqr_mean").click(function(){
   let that = $(this)     
   sqr_mean(list, that);                      
});

$(".no_btn").click(function(){
    console.log("LOL");
    let that = $(this);
    console.log(that);
    ignore(that);
})



//compute the sum of the numbers of the list
function sum(array, clicked){
    let total = 0
//    numbers = list.map(n => parseInt(n));
    parsed_array = parse(array);
    parsed_array.forEach(function(n){
        total = total + n;
    })
    //check if the sum button has been clicked
    if($(clicked).attr("id") == "sum_it" ){
        $("#sum").html("Sum: " + total);
    }
    return total
}

//compute the mean value of the numbers of the list
function mean(array, clicked){
    let s = sum(array)
    console.log(s);
    let length = array.length
    let mean = s/length;
    if ($(clicked).attr("id") == "get_mean"){
        $("#mean").html("Mean: " + mean);
    }
    return mean
}

//compute the mean value of the squared numbers of the list
function sqr_mean(array, clicked){
    let squared_array = square(array);
    let sqr_mean = mean(squared_array, clicked)
    if ($(clicked).attr("id") == "get_sqr_mean" ){
        $("#sqr_mean").html("Square Mean: " + sqr_mean);
    }
    return sqr_mean
}

//ignore one particular element
function ignore(clicked){
    console.log("lol");
    console.log(clicked);
    console.log($(clicked).parent());
//        .css("color", "red");
}

//small utiilty function to parse the strings in the array "list" into integers
function parse(array){
    let result = array.map(n => parseInt(n));
    return result
}

//function to square the elements of an array
function square(array){
    let parsed_array = parse(array)
    let result = parsed_array.map(n => n*n);
    return result
}




