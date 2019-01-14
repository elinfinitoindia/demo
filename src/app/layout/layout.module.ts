import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListItem
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreatedealComponent } from './createdeal/createdeal.component';
import { EditComponent } from './edit/edit.component';
import { CreateImagesComponent } from './create-images/create-images.component';
import {UploadServiceService} from '../shared/services/upload-service.service';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatExpansionModule,
        TranslateModule,
        
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent,EditComponent]
    ,
    providers: [UploadServiceService]
})
export class LayoutModule {}
