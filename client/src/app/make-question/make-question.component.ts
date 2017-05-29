import { Component, OnInit } from '@angular/core';
import { Question, Answer } from "app/question";
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
  a1 = new Answer("correct answer", true)
  a2 = new Answer("wrong answer one", false)
  a3 = new Answer("wrong answer two", false)
 


  constructor(
              private triviaService: TriviaService,
              private router: Router
  ) { }

  ngOnInit() {
      
  }

  getAllQuestions(){
    console.log("client is asking for all questions")
    this.triviaService.get_all_questions()
      .then((data) => {
        // console.log(data)
        this.allQuestions = data
        
      })
      .catch((err) => {console.log(err)})
  }

  create(){

    this.newQuestion.answers[0] =(this.a1)
    this.newQuestion.answers[1] =(this.a2)
    this.newQuestion.answers[2]= (this.a3)
     this.triviaService.create_question(this.newQuestion)
      .then((data) => {
        this.newQuestion= new Question
        //redirect to root once this is working
      this.router.navigateByUrl('/');
      // this.getAllQuestions()
    })
      .catch((err) => {console.log(err)})
  }

  

}
