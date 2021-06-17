import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAppointmentRoutingModule } from './add-appointment-routing.module';
import { AddAppointmentComponent } from './add-appointment.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAppointmentComponent
  ],
  imports: [
    CommonModule,
    AddAppointmentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddAppointmentModule { }
