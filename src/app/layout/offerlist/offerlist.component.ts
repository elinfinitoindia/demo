import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OfferModel } from 'src/app/models/offer';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'offerlist',
  styleUrls: ['offerlist.component.scss'],
  templateUrl: 'offerlist.component.html',
})
export class OfferlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['Name', 'Description', 'Cashback', 'EndOn' , 'Store' , 'Brand' , 'Category' ,'Action' ];
  public off= [
    {
      'Name':'Demo1',
      'Description': 'sfdsfsdfdsfsd',
      'Cashback' : '25',
      'EndOn': 'sfdfsdfdsf',
      'Store' : 'Amazon' ,
      'Brand': 'Puma',
      'Category' : 'Shopping'
    },
     {
      'Name': 'Demosss1',
      'Description': 'sfdsfsdffgfdsgfddsfsd',
      'Cashback': '2dfgdfg5',
      'EndOn': 'sfdfdfgdfgsdfdsf',
      'Store': 'Amdsfgdfgazon',
      'Brand': 'Pdsfgdfguma',
      'Category': 'Shdfgfdgopping'
    }
  ]
  public dataSource;
  public data;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient , private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    // this.httpClient.get('http://localhost:5000/api/offers').subscribe(res => {
    //   this.data = res;
    //   console.log(this.data);
    //   // this.dataSource = new MatTableDataSource<OfferModel>(this.data);
      
    // });
  
    this.dataSource = new MatTableDataSource(this.off);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editOffer(data){
    this.router.navigate(['editoffer',{id:data}]);
  }

  closeOffer
  (data){
    console.log(data);
  }
}