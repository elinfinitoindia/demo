import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'insert-data',
                loadChildren: './insert-data/insert-data.module#InsertDataModule'
                                                              
            },
            {
                path: 'categories',
                loadChildren: './categoies/categoies.module#CategoiesModule'

            },
            {
                path: 'brands',
                loadChildren: './brands/brands.module#BrandsModule'

            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path:'create-offer',
                loadChildren: './create-offer/create-offer.module#CreateOfferModule'
            },
            {
                path:'offerlist',
                loadChildren: './offerlist/offerlist.module#OfferlistModule'
            },
             {
                path:'editoffer/:id',
                loadChildren: './editoffers/editoffers.module#EditoffersModule'
            },
            {
                path:'payments',
                loadChildren:'./paymentrequests/paymentrequests.module#PaymentrequestsModule'
            },
            {
                path: 'createdeal',
                loadChildren: './createdeal/createdeal.module#CreatedealModule'
            },
            {
                path:'users',
                loadChildren:'./users/users.module#UsersModule'
            },
              {
                path:'images',
                loadChildren:'./create-images/create-images.module#CreateImagesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
