export default class VacationHomeHtmlComponent{
    
    constructor(){
        this.id = {
            detail_container:"#detail-container",
            all_home_container:".row",
        }
        this.img = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    }

    append_a_card(id ,content,card_type){
        // console.log(content)
        // console.log(this.id.detail_container)
        if (card_type ==='home-detail'){
            $(id).append(this.basic_home_card(content));
        } else if (card_type ==="index-home-card"){
            $(id).append(this.index_home_card(content));
        }
    
    }

    append_all_cards(all_homes){
        console.log('getting all home objects here')
        // console.log(all_homes)
        for (const home of all_homes){
            this.append_a_card(this.id.all_home_container,home,'index-home-card')
        }
    }

    
    index_home_card(home_object) {
        console.log("home index card......")
        let basic_home_card = this.basic_home_card(home_object)
        let home_page_card = /* html */ 
        ` <div class="col-md-4">${basic_home_card}</div>`
        return home_page_card
    }
    
    
    basic_home_card(home_object) {
        return /*html*/`<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="${this.img}" class="card-img-top" alt="...">
                        <h5 class="card-title">${home_object.title}</h5>
                        <p class="card-text"> Some description here ......</p>
                        <a href="/vacation-homes/detail/${home_object.id}/edit/" class="btn btn-primary">Edit</a>
                    </div>
                 </div>`
    }
}