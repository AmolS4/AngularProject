import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from '.././app/components/login/login.module';
import {RegistrationModule} from '.././app/components/registration/registration.module';
import {SchedulingModule} from "./components/scheduling/scheduling.module";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AddAppointmentModule} from './components/add-appointment/add-appointment.module';
import {EditAppointmentModule} from './components/edit-appointment/edit-appointment.module';
import {DeleteAppointmentModule} from './components/delete-appointment/delete-appointment.module';
import {PhysicianViewModule} from './components/physician-view/physician-view.module';
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
    SchedulingModule,
    AddAppointmentModule,
    EditAppointmentModule,
    DeleteAppointmentModule,
    PhysicianViewModule
  //  FormsModule,
  // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
