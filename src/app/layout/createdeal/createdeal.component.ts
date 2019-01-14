import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { Deals } from 'src/app/models/deals';

@Component({
  selector: 'app-createdeal',
  templateUrl: './createdeal.component.html',
  styleUrls: ['./createdeal.component.scss']
})
export class CreatedealComponent implements OnInit {

  public brands
         : any;
  public categories
         :any;
  public images:any;
  public deal;

  constructor( private httpService: ServiceService) { 
    this.deal = new Deals();
  }

  ngOnInit() {
    this.httpService.getBrands().subscribe(res => {
      this.brands = res;
    })

    this.httpService.getCategories().subscribe(res => {
      this.categories = res;
    })

  }

}
