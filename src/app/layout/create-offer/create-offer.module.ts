import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule
} from '@angular/material';

import {CreateOfferComponent } from './create-offer.component';
import { CreateOfferRoutingModule } from './create-offer-routing.module';
@NgModule({
    imports: [CommonModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        FormModule,
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
        CreateOfferRoutingModule],

    declarations: [CreateOfferComponent],
    providers: [DatePipe]
})
export class CreateOfferModule {}
