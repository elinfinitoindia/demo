import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoiesComponent } from './categoies.component';

const routes: Routes = [
  {
    path:'',
    component:CategoiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoiesRoutingModule { }
