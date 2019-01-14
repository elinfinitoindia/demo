import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentrequestsComponent } from './paymentrequests.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentrequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentrequestsRoutingModule { }
