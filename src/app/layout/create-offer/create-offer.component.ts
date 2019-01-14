import { Component, OnInit } from '@angular/core';
import {OfferModel} from '../../models/offer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cloudinary } from '@cloudinary/angular-5.x'; 
import { ServiceService } from 'src/app/shared/service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})

export class CreateOfferComponent implements OnInit {

  public brands;
  public categories;
  public offer:OfferModel;

  constructor(public httpService: ServiceService, private datePipe: DatePipe) {

}

  ngOnInit() {
    this.httpService.getBrands().subscribe(res=>{
      this.brands = res;
    })

    this.httpService.getCategories().subscribe(res => {
      this.categories = res;
    })
    this.offer = new OfferModel();
  }

  createoffer(data){
    console.log(this.datePipe.transform(data.EndOn, "dd-MM-yyyy")); 
}

}
