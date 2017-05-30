import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { AppointmentService } from "app/appointment.service"
 

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DashboardComponent,
    MakeAppointmentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
