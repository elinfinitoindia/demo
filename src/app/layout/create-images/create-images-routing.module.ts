import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateImagesComponent } from './create-images.component';

const routes: Routes = [
  {
    path:'',
    component:CreateImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateImagesRoutingModule { }
