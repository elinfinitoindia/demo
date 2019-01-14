import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brands} from '../../models/brands';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  public brand: any;
  public edit:boolean;
  public isDisabled:boolean;
  public brands:Brands;
  
  
  constructor(private httpService: ServiceService, private httpClient: HttpClient, private ele: ElementRef, private renderer: Renderer2) { 
        this.edit = true;
    this.isDisabled = true; 
  }

  ngOnInit( ) {
   this.httpService.getBrands().subscribe(res=>{
    this.brand = res;
   })
  }


  editBrand(item){
    this.renderer.removeAttribute(this.ele.nativeElement ,'disabled');
    this.edit = false;
    console.log(item);
  }

  updateBrand(item){
    this.httpService.updateBrands(item).subscribe(res=>{
      console.log(res);
    })
  }

  createBrand(){
    this.httpService.createBrand(this.brands).subscribe(res=>{
      console.log(res);
    })
  }

}
