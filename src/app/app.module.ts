import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from '.././app/components/login/login.module';
import {RegistrationModule} from '.././app/components/registration/registration.module';
import {ForgotPasswordModule} from '.././app/components/forgot-password/forgot-password.module';
import{ChangePasswordModule} from '.././app/components/change-password/change-password.module';
import{PatientMedicationDetailsModule} from '.././app/components/patient-medication-details/patient-medication-details.module';
import{ProviderRegistrationModule} from '.././app/components/provider-registration/provider-registration.module';

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
    ForgotPasswordModule,
    ChangePasswordModule,
    PatientMedicationDetailsModule,
    ProviderRegistrationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
