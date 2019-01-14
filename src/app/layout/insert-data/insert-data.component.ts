import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service'
import { HttpClient } from '@angular/common/http';
import { Stores } from '../../models/stores';

@Component({
    selector: "app-blank-page",
    templateUrl: "./insert-data.component.html",
    styleUrls: ["./insert-data.component.scss"]
})
export class InsertDataComponent implements OnInit {
    constructor(
        private httpService: ServiceService,
        private httpClient: HttpClient
    ) { }
    public images: any = [];
    isDisabled: boolean;
    public selectedImage: any;
    public store:Stores;
    ngOnInit() {

        this.isDisabled = true;
    }

    editStore(data){

    }

    updateStore(data){
        
    }

    createStore(){
        this.httpService.createStore(this.store).subscribe(res=>{
            console.log(res);
        })
    }
}
