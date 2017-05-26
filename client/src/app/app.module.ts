import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { MakeQuestionComponent } from './make-question/make-question.component';
import { TriviaService } from "app/trivia.service";
import { routing } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent,
    MakeQuestionComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
