import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferlistComponent } from './offerlist.component';
import {OfferlistRoutingModule} from './offerlist.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatPaginatorModule, MatFormFieldModule ,MatInputModule, MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule,
    OfferlistRoutingModule,
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
    MatSelectModule,
        
  ],
  declarations: [OfferlistComponent]
})
export class OfferlistModule { }
