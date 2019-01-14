import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InsertDataRoutingModule } from './insert-data-routing.module';
import { InsertDataComponent } from './insert-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, InsertDataRoutingModule,
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
    declarations: [InsertDataComponent]
})
export class InsertDataModule {}
