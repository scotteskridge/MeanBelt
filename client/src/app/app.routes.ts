import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MakeQuestionComponent } from './make-question/make-question.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'test', component: TestComponent },
    { path: 'newQuestion', component: MakeQuestionComponent }
];

//concider useing routes for your logout service as well but may come back to that
export const routing = RouterModule.forRoot(APP_ROUTES);