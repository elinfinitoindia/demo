import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
    selector: "app-categoies",
    templateUrl: "./categoies.component.html",
    styleUrls: ["./categoies.component.scss"]
})
export class CategoiesComponent implements OnInit {
    public category: any;
    constructor(
        private httpService: ServiceService,

    ) { }

    ngOnInit() {
        this.httpService.getCategories().subscribe(res => {
            this.category = res;
        })
    }

    editCategory(data){

    }

    updateCategory(data){
        
    }

    createCategory(){
        this.httpService.createCategory(this.category).subscribe(res=>{
            console.log(res);
        })
    }
}
