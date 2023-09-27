export default class VacationHomeAjax {
    
    constructor(id=null){
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
            home_detail: "/vacation-homes-api/" + `${id}/`,
    
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

    vacation_home_ajax(method, api,data=null,headers=null){
        let result = null;
        $.ajax({
            headers: headers,
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
        
     return this.vacation_home_ajax(this.method.get, this.api.all_home)

    }

    create_a_home(data){
     this.vacation_home_ajax(this.method.post, this.api.all_home,data)
     window.location.href = '/vacation-homes/';

    }

    load_a_home(){
        console.log('loading one home now........')
        return this.vacation_home_ajax(this.method.get, this.api.home_detail)
        // $('#detail-container').append(this.home_card(home));
    }

    update_a_home(data,headers){
        // console.log('I am editing a home now here!!!!!')
        // console.log(this.api.home_detail)
        // console.log(headers)
        this.vacation_home_ajax(this.method.put, this.api.home_detail, data, headers)
    
    }

    delete_a_home(headers,data=null){
        // console.log("I am deleting a home now!!!!!!")
        // console.log(this.api.home_detail)
        // console.log(headers)
        this.vacation_home_ajax(this.method.delete, this.api.home_detail,data,headers)
    }

}

    