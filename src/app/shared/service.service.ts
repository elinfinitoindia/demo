import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private httpClient: HttpClient) { 
  }

  // load all the brands 
  getBrands(){
    return this.httpClient.get('http://localhost:5000/api/brand', httpOptions);
  }

  // loads all the categories
  getCategories(){
  return this.httpClient.get('http://localhost:5000/api/category' , httpOptions);
  }

  // this method creates the brand
  createBrand(data){
    return this.httpClient.post('http://localhost:5000/api/brand',data , httpOptions);
  }

  //this is used to create a new category
  createCategory(data){
     return this.httpClient.post('http://localhost:5000/api/category',data, httpOptions);
  }

  // Create offers
  createOffers(data){
   return this.httpClient.post('http://localhost:5000/api/offers',data , httpOptions);
  }

  // Edit Offer
  editOffer(data){
   return this.httpClient.put('apiUrl', data , httpOptions);
  }

  getOfferById(data){
    return this.httpClient.get('apiurl' , httpOptions);
  }

  // upload images to aws 
  uploadImages(data){
    this.httpClient.post('apiurl', data, httpOptions);
  }

  // get all the stored images
  getImages(){

  }

  // get all the register users
  getUsers(){

  }

  // fget all the payment requests intialized by users
  getPaymentRequests(){
 return this.httpClient.get('api' , httpOptions);
  }

  // update the payment request status 
  updatePaymentRequests(){

  }

  // get all the click records
  getClickRecords(){

  }

  // create the ads
  createAds(){

  }

  //get all created ads
  getAds(){

  }

  //get all the deals 
  getDeals(){

  }
  
  //create the deals 
  createDeals(){

  }

  //edit the deals 
  editDeals(){

  }

  updateBrands(data){
return this.httpClient.put('api' , httpOptions);
  }

  createStore(data){
    return this.httpClient.post('api' , data , httpOptions);
  }
}
