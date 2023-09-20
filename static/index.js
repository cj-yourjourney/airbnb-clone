
$(document).ready(function () {
    console.log('jquery is ready to go !!!!!')


    $.ajax({
        type: "GET",
        cache: false,
        url: "/api-vacation-homes/",
        success: function (response) {
            $.each(response.results, function (index, element) {
                // element == this
                console.log(element.title)

                $('#all-vacation-homes').append("<li>" + element.title + "</li>")
                $('.row').append(` <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                    <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`);

            });
        }
    });


    console.log('end of jquery -2')
}); // End of doc ready function 


