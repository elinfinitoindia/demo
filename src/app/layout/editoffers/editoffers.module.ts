import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoffersComponent} from './editoffers.component'
import { EditoffersRoutingModule } from './editoffers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditoffersRoutingModule
  ],
  declarations: [EditoffersComponent]
})
export class EditoffersModule { }
