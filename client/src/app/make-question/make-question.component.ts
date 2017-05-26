import { Component, OnInit } from '@angular/core';
import { Question } from "app/question";
import { TriviaService } from "app/trivia.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-make-question',
  templateUrl: './make-question.component.html',
  styleUrls: ['./make-question.component.css']
})
export class MakeQuestionComponent implements OnInit {
  newQuestion= new Question
  allQuestions = []
  storage = window['localStorage']
  
  constructor(
              private triviaService: TriviaService,
              private router: Router
  ) { }

  ngOnInit() {
    
  }


  create(){
     this.triviaService.create_question(this.newQuestion)
      .then((data) => {
        this.newQuestion= new Question
        //redirect to root once this is working
      // this.router.navigateByUrl('/');
      this.router.navigateByUrl('/');
    })
      .catch((err) => {console.log(err)})
  }

  

}
