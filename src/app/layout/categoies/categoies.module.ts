import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoiesRoutingModule } from './categoies-routing.module';
import {CategoiesComponent} from './categoies.component'
import { MatAutocompleteModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatExpansionModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    CategoiesRoutingModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        MatExpansionModule,
        MatListModule
    
  ],
  declarations: [CategoiesComponent
                 ]
})
export class CategoiesModule { }
