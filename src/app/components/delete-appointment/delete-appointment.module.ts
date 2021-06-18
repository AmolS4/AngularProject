import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAppointmentRoutingModule } from './delete-appointment-routing.module';
import { DeleteAppointmentComponent } from './delete-appointment.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    DeleteAppointmentComponent
  ],
  imports: [
    CommonModule,
    DeleteAppointmentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DeleteAppointmentModule { }
