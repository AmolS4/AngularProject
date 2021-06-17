import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from '.././app/components/login/login.module';
import {RegistrationModule} from '.././app/components/registration/registration.module';
import {VisitDetailsModule} from '.././app/components/visit-details/visit-details.module'
import { DiagnosisModule } from './components/diagnosis/diagnosis.module';
import { ProcedureModule } from './components/procedure/procedure.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistrationModule,
    VisitDetailsModule,
    DiagnosisModule,
    ProcedureModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
