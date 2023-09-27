import VacationHomeAjax from "./vacation_home_ajax.js";
import VacationHomeHtmlComponent from "./vacation_home_html_component.js";
var vacationHomeAjax = new VacationHomeAjax
var vacationHomeHtml = new VacationHomeHtmlComponent
$(document).ready(function () {
    console.log('jquery in Home Page !!!!!')
    let all_homes = vacationHomeAjax.load_all_home()
    //    console.log(all_homes)
    vacationHomeHtml.append_all_cards(all_homes)
    // var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value
    // const imgURL = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    // Load all vacation home from GET API URL
    // $.ajax({
    //     type: "GET",
    //     cache: false,
    //     url: "/vacation-homes-api/",
    //     success: function (response) {
    //         $.each(response, function (index, element) {
    //             $('#all-vacation-homes').append("<li>" + element.title + "</li>")
    //             $('.row').append(` <div class="col-sm-4">
    //                 <div class="card" style="width: 18rem;">
    //                 <img src="${imgURL}"
    //                     class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${element.title}</h5>
    //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
    //                         content.</p>
    //                     <a href="/vacation-homes/detail/${element.id}/" class="btn btn-primary">Home Detail</a>
    //                 </div>
    //             </div>
    //         </div>`);

    //         });
    //     }
    // });

    console.log('end of jquery in Home Page ')
}); // End of doc ready function 


