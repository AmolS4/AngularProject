import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicianViewRoutingModule } from './physician-view-routing.module';
import { PhysicianViewComponent } from './physician-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PhysicianViewComponent
  ],
  imports: [
    CommonModule,
    PhysicianViewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PhysicianViewModule { }
