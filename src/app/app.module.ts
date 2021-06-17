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
//import { TopnavComponent } from './Layout/topnav/topnav.component';
import { PatientdetailsModule  } from './components/patientdetails/patientdetails.module'
//import { LayoutModule } from '@angular/cdk/layout';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { HttpClient } from '@angular/common/http';
import { LayoutModule } from './Layout/layout/layout.module'
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  //  TopnavComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistrationModule,
    PatientdetailsModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    SchedulingModule,
    AddAppointmentModule,
    EditAppointmentModule,
    DeleteAppointmentModule,
    PhysicianViewModule
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
