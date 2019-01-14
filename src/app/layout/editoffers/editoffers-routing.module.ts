import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditoffersComponent } from './editoffers.component';

const routes: Routes = [
{
  path:'',
  component: EditoffersComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoffersRoutingModule {

 }
