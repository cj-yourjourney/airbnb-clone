// Create a New Vacation Home 

// Import VacationHomeAjax Class and create an instance 
import VacationHomeAjax from "./vacation_home_functions.js";
var vacationHomeAjax = new VacationHomeAjax

var token = $('#csrf_token').val()




$('#vacation-home-form').submit(function (e) {
    e.preventDefault();
    console.log("form submitted here!!!!!!");
    let data = $(this).serialize();
    vacationHomeAjax.create_a_home(data);
});