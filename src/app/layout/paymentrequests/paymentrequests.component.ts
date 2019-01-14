import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { OfferModel } from 'src/app/models/offer';
import { ServiceService } from 'src/app/shared/service.service';
import { Payments } from 'src/app/models/payments';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentrequests',
  templateUrl: './paymentrequests.component.html',
  styleUrls: ['./paymentrequests.component.scss']
})
export class PaymentrequestsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['Name', 'Amount','Action'];
  public dataSource;
  public data =[ {
    'Name':'Pratee', 'Amount':'200',  }
  ]

  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient , private httpService:ServiceService) { }


  ngOnInit() {
    // this.httpClient.get('http://localhost:5000/api/offers').subscribe(res => {
    //   this.data = res;
    //   console.log(this.data);
    //   this.dataSource = new MatTableDataSource<OfferModel>(this.data);
    // });

    // this.httpService.getPaymentRequests().subscribe(res=>{
    //   this.data = res;
    //   this.dataSource = new MatTableDataSource<Payments>(this.data);
    // })


    this.dataSource = new MatTableDataSource(this.data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
