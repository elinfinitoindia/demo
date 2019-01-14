import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateImagesRoutingModule } from './create-images-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatExpansionModule, MatListModule } from '@angular/material';
import { CreateImagesComponent } from './create-images.component';

@NgModule({
  imports: [
    CommonModule,
    CreateImagesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [CreateImagesComponent]
})
export class CreateImagesModule { }
