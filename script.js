let number =[];
let list =[];
let current ="";

//display the number on the input
$(".digit").click(function(){
    number.push($(this).attr("name"));
    //to obtain a string without comma:
    let string = number.join("");
    //set the imput value to the obtained string
    $("#num_input").val(string);
})

//cancel the number on the display
$("#cancel").click(function(){
    $("#num_input").val(" ");
    number=[];
})

//put the number in the current number slot and in the list
$("#send").click(function(){
    // clear the number used so far, so it won't reappear by clicking the digit buttons
    number =[];
    // use the value of the input to have the current number; parse it to integer
    current = parseInt($("#num_input").val());
    //check if the input is a number; if not, alert message
    if (! Number.isNaN(current)){
        $("#current").html("Current number: " + current);
        // put the current number in a list and in the array
        list.push(current);
        let item = $("<li>");
        $(item).attr("class", "list_item").html(current);
        //bind the function "ignore" to the new list item
        $(item).click(function(){
            let that = $(this);
            ignore(that);
        })
        $("#num_list").append(item); 
    }
    
    if (Number.isNaN(current)){
        alert("Please insert a number")
    }
    //clear the current input value
    $("#num_input").val(" ")
})

//clear the whole list
$("#clear_all").click(function(){
        list = [];
        $("#current").html("Current number :")
        $("#sum").html("Sum: ");
        $("#mean").html("Mean: ");
        $("#sqr_mean").html("Square Mean: ");
        $("#variance").html("Variance: ");
        
        $(".list_item").each(function(){
            $(this).remove();
        })
})

//clear the current number
$("#clear_current").click(function(){
    $("#current").html("Current number :")
})

//see below for functions
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

$("#get_variance").click(function(){
    let that = $(this)
    variance(list, that);
})

//FUNCTIONS BOUND TO THE 4 BUTTONS ABOVE

//compute the sum of the numbers of the list
function sum(array, clicked){
    let total = 0
    parsed_array = parse(array)
    
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
    let sqr_mean = mean(squared_array, clicked);
    
    if ($(clicked).attr("id") == "get_sqr_mean" ){
        $("#sqr_mean").html("Square Mean: " + sqr_mean);
    }
    
    return sqr_mean
}

//ignore one or more numbers in the computation
function ignore(clicked){
    let color = $(clicked).css("color");
    //parse the html of the clicked element
    let chosen= parseInt($(clicked).html())
//    list.splice(list.indexOf(chosen))
    $(clicked).toggleClass("ignored")
    //if the chosen element has the class "ignored", delete it from the array "list";
    //otherwise put it in the array "list"
    if ($(clicked).hasClass("ignored")){
        list.splice(list.indexOf(chosen), 1);
    }
    else{
        list.push(chosen)
    }
}

//compute the variance:
//1) find the mean of a group of numbers
//2) subtract it to each number, then square the result
//3) find the mean of the resulted squared numbers

function variance(array, clicked){
    //point 1
    let m = mean(array, clicked);
    //point 2
    let mid_array = array.map( n => Math.pow((n-m), 2));
    //point 3
    let v = mean(mid_array, clicked);
    
    if ($(clicked).attr("id") == "get_variance"){
        $("#variance").html("Variance: " + v);
    }
    return v;
}

//function to parse the strings in the array "list" into integers
function parse(array){
    let result = array.map(n => parseInt(n));
    
    return result
}

//function to square the elements of an array
function square(array){
    let parsed_array = parse(array);
    let result = parsed_array.map(n => n*n);
    
    return result
}



