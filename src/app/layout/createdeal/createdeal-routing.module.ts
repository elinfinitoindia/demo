import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatedealComponent } from './createdeal.component';

const routes: Routes = [
  {
    path:'' , 
    component: CreatedealComponent
               
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedealRoutingModule { }
