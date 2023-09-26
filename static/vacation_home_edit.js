$(document).ready(function () {
    const imgURL = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    // var token = '{{csrf_token}}';
    console.log('jquery in edit page')
    var id = $("#vacation-home").val()
    var token = $('#csrf_token').val()
    console.log(token)
    // console.log(id)

    // formType = $('#create-form').val()
    // console.log(formType)

    // Load the Vacation Home First,
    $.ajax({
        type: "GET",
        url: `/vacation-homes-api/${id}/`,
        success: function (response) {
            console.log(response)
            // Add value to the edit form
            $('#title').val(`${response.title}`);
            
        },
        error: function(error){
            console.log(error)

        }
    });
   
    // Update the instance 
    $("#home-edit-form").submit(function (e) { 
    e.preventDefault();
    console.log('form submitted!!!!')
    $.ajax({
        headers: { "X-CSRFToken": token },
        type: "PUT",
        url: `/vacation-homes-api/${id}/`,
        data: $(this).serialize(),
        success: function (response) {
            console.log(response)
            
        },
        error: function(error){
            console.log(error)
        }
    });

    });

    console.log('checking the for name');
    var formType = $("#is-edit-form").val();
    console.log(formType);

    if (formType =="true") {
        console.log('add a delete button to the edit form')
        $('#home-edit-form').append('<a id="delete-home-button" href="#">Delete</a>');
        $('#vacation-home-button').text('Update');
    }


    // Delete the instance 
    $('#delete-home-button').on('click', function (e) {
        e.preventDefault();

        console.log("delete butoon got clicked!!!!")
    
        $.ajax({
            headers: { "X-CSRFToken": token },
            type: "DELETE",
            url: `/vacation-homes-api/${id}/`,
            success: function (response) {
                console.log(response)
            },
            error: function (error){
                console.log(error)
            }
        });

    });
  
}); // End of Jquery 