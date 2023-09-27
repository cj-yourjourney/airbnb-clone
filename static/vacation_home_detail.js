// import classes from other js flies

import VacationHomeAjax from "./vacation_home_ajax.js";
import VacationHomeHtmlComponent from "./vacation_home_html_component.js";
$(document).ready(function () {

    console.log('detail page js is ready to go ')
    var id = $('#vacation-home').val()
   
    // create instances from these 2 class 
    var vacationHomeAjax = new VacationHomeAjax(id)
    var vacationHomeHtml = new VacationHomeHtmlComponent()

    // Load the object data via Ajax
    let home_object = vacationHomeAjax.load_a_home()
    // add html component with the data and append the card
    vacationHomeHtml.append_a_card('#detail-container',home_object,'home-detail')
   

}); // End of Jquery 