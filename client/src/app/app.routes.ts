import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakeAppointmentComponent } from "app/make-appointment/make-appointment.component";

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'makeAppointment', component: MakeAppointmentComponent },

];

//concider useing routes for your logout service as well but may come back to that
export const routing = RouterModule.forRoot(APP_ROUTES);