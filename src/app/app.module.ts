import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from '.././app/components/login/login.module';
import {RegistrationModule} from '.././app/components/registration/registration.module';
<<<<<<< HEAD
import {VisitDetailsModule} from '.././app/components/visit-details/visit-details.module'
import { DiagnosisModule } from './components/diagnosis/diagnosis.module';
import { ProcedureModule } from './components/procedure/procedure.module';
import { FormsModule } from '@angular/forms';
=======
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
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3


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
<<<<<<< HEAD
    VisitDetailsModule,
    DiagnosisModule,
    ProcedureModule,
    FormsModule,
    
  ],
  providers: [],
=======
    PatientdetailsModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
],
providers: [],
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
