import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAppointmentRoutingModule } from './edit-appointment-routing.module';
import { EditAppointmentComponent } from './edit-appointment.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    EditAppointmentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditAppointmentModule { }
