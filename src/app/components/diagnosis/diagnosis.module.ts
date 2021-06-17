import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { DiagnosisComponent } from './diagnosis.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiagnosisModule { }
