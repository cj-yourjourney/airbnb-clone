import VacationHomeAjax from "./vacation_home_functions.js";

var vacationHomeAjax = new VacationHomeAjax

$(document).ready(function () {
    // const imgURL = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    console.log('detail page js is ready to go ')

    var id = $('#vacation-home').val()
    // console.log(id)
    
    vacationHomeAjax.load_a_home(id)

    
    
    // $.ajax({
    //     type: "GET",
    //     cache: false,
    //     url: `/vacation-homes-api/${id}/`,


    //     success: function (response) {
    //         console.log('inside success detail')
    //         console.log(response.id)
    //         $('#detail-container').append(`
    //         <div class="card" style="width: 18rem;">
    //             <img src="${imgURL}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${response.title}</h5>
    //                     <p class="card-text"> Some description here ......</p>
    //                      <a href="/vacation-homes/detail/${response.id}/edit/" class="btn btn-primary">Edit</a>
    //                 </div>
    //         </div>
    //         `);



    //     },
    //     error: function (error) {
    //         console.log(error)
    //     }
    // });





}); // End of Jquery 