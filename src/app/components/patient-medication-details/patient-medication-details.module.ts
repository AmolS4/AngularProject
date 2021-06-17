import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientMedicationDetailsRoutingModule } from './patient-medication-details-routing.module';
import { PatientMedicationDetailsComponent } from './patient-medication-details.component';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
//import { MdCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    PatientMedicationDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientMedicationDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    AutocompleteLibModule,
    MatAutocompleteModule
  ]
})
export class PatientMedicationDetailsModule { }
