import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/app/models/ads';
import { ServiceService } from 'src/app/shared/service.service';
import { OfferModel } from 'src/app/models/offer';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    public brands;
    public categories;
    public ads: Ads;

    constructor(public httpService: ServiceService) {

    }

    ngOnInit() {
        this.httpService.getBrands().subscribe(res => {
            this.brands = res;
        })

        this.httpService.getCategories().subscribe(res => {
            this.categories = res;
        })
        this.ads = new Ads();
    }
}
