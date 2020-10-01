//updating clock/calander
var currentTime = moment().format("dddd, MMMM Do"),
    HH = moment().format("HH");

$("#currentDay").html(currentTime);






//LOCAL STORAGE ROUGH IDEA

//pull over the textarea element
$("i").click(function()  {
    var saving = $(this).attr("id") + "t";
    var saveInfo = document.getElementById(saving).value
    localStorage.setItem(saving, saveInfo);
});





