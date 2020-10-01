// Self updating clock/calander
var currentTime = moment().format("dddd, MMMM Do"),
    HH = moment().format("HH");

$("#currentDay").html(currentTime);

//creating variables 



//making a loop for the time to display throughout the day
//for loop?

//loop referencing the colock that is displayed on page

//loop also pulls any saved items 

for (let i = 9; i < 18; i++) {
    var timeBlocks = document.getElementById("time-block");
    var pullItems = "save" + i + "t";
    if (i < HH) {
        timeBlocks.classList.add("past");
    }
    if (i === HH) {
        timeBlocks.classList.add("present");
    }
    if (i > HH) {
        timeBlocks.classList.add("future");
    }
    document.getElementById(pullItems).value = localStorage.getItem(pullItems); 
    //pulls any saved info from local storage and displays it accordingly
}




//LOCAL STORAGE ROUGH IDEA

//pull over the textarea element





