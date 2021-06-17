import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRegistrationRoutingModule } from './provider-registration-routing.module';
import { ProviderRegistrationComponent } from './provider-registration.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {  MatInputModule } from '@angular/material/input';


import { MatButtonModule } from '@angular/material/button';


import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import {MatNativeDateModule} from '@angular/material/core';
 import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ProviderRegistrationComponent
  ],
  imports: [
    CommonModule,
    ProviderRegistrationRoutingModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class ProviderRegistrationModule { }
