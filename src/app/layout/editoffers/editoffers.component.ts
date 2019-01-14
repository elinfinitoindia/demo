import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OfferModel } from 'src/app/models/offer';
import { ServiceService } from 'src/app/shared/service.service';



@Component({
  selector: 'app-editoffers',
  templateUrl: './editoffers.component.html',
  styleUrls: ['./editoffers.component.scss']
})
export class EditoffersComponent implements OnInit {

  public offer:any;
  public id;
  constructor(private route: ActivatedRoute, private router: Router, private httpService: ServiceService ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
 this.httpService.getOfferById(this.id).subscribe((res)=>{
      this.offer = res;
      console.log(res);
    });
  }
   
  

  editOffer(){
    this.httpService.editOffer(this.offer).subscribe((res)=>{
    console.log(res);
    })
  }

}
