import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentrequestsRoutingModule } from './paymentrequests-routing.module';
import { PaymentrequestsComponent } from './paymentrequests.component';
import { MatGridListModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    PaymentrequestsRoutingModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  declarations: [PaymentrequestsComponent]
})
export class PaymentrequestsModule { }
