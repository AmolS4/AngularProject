import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextFieldModule} from '@angular/cdk/text-field';
import { VisitDetailsRoutingModule } from './visit-details-routing.module';
import { VisitDetailsComponent } from './visit-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    VisitDetailsComponent
  ],
  imports: [
    CommonModule,
    VisitDetailsRoutingModule,
    TextFieldModule,
    MatFormFieldModule,
    MatCardModule
    
  ]
})
export class VisitDetailsModule { }
