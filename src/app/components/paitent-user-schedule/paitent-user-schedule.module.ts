import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaitentUserScheduleRoutingModule } from './paitent-user-schedule-routing.module';
import { PaitentUserScheduleComponent } from './paitent-user-schedule.component';


@NgModule({
  declarations: [
    PaitentUserScheduleComponent
  ],
  imports: [
    CommonModule,
    PaitentUserScheduleRoutingModule
  ]
})
export class PaitentUserScheduleModule { }
