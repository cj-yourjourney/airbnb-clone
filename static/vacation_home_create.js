// Create a New Vacation Home 

console.log("create a new home....")

formType = $('#create-form').val()
console.log(formType)

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
            window.location.href = '/vacation-homes/';
        },
        error: function (error) {
            console.log(error)
        }
    });

});