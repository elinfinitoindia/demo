import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatAutocompleteModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, GridRoutingModule, FlexLayoutModule, MatCardModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        FormModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,],
    declarations: [GridComponent]
})
export class GridModule {}
