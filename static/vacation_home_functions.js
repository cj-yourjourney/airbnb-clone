export default class VacationHomeAjax {
    
    constructor(){
        this.method = {
            get: 'GET',
            post: "POST",
            put: 'PUT',
            delete: 'DELETE',
        }
        
        this.urls = {
            all_home: 'vacation-homes/',
        }


        this.api = {
            all_home: "/vacation-homes-api/",
            home_detail: null,
    
        }
        this.img = 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
    
    home_card(home_object) {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="${this.img}" class="card-img-top" alt="...">
                        <h5 class="card-title">${home_object.title}</h5>
                        <p class="card-text"> Some description here ......</p>
                        <a href="/vacation-homes/detail/${home_object.id}/edit/" class="btn btn-primary">Edit</a>
                    </div>
                 </div>`
    }

    vacation_home_ajax(method, api,data=null){
        let result = null;
        $.ajax({
            type: method,
            url: api,
            async: false,  //add
            data: data,
            success: function (response) {
            //    console.log(response)
                result = response
            },
            error: function (error) {
                console.log(error)
            }
        });
        return result
    }
    
    load_all_home(){
     console.log("loading all homes now.....")
        
     let all_homes = this.vacation_home_ajax(this.method.get, this.api.all_home)
     var new_home = new VacationHomeAjax
     
     $(all_homes).each(function (index, element) {
    
         $('.row').append(new_home.home_card(element));
         console.log()
     });
    
     

    }

    create_a_home(data){
     console.log("create a new home now......") 
     this.vacation_home_ajax(this.method.post, this.api.all_home,data)
     console.log("Created a new home")
    //  window.location.href = '/vacation-homes/';

    }

    load_a_home(id){
        console.log('loading one home now........')
        this.id = id 
        this.api.home_detail = this.api.all_home + `${this.id}`
        let home = this.vacation_home_ajax(this.method.get, this.api.home_detail)

        // $('.ul').append(`<li>${home.title}</li>`);
        $('#detail-container').append(this.home_card(home));
    }


}

    