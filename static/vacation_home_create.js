// Create a New Vacation Home 

$('#vacation-home-form').submit(function (e) {
    e.preventDefault();
    console.log("form submitted here!!!!!!");
    console.log($(this).serialize())
    $.ajax({
        type: "POST",
        url: "/vacation-homes-api/",
        data: $(this).serialize(),
        success: function (response) {
            console.log(response)
        },
        error: function (error) {
            console.log(error)
        }
    });

});