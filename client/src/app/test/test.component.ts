import { Component, OnInit } from '@angular/core';
import { TriviaService } from "app/trivia.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  storage = window['localStorage']
  allQuestions = []
  testQuestions = []
  tally = {
    1 : false,
    2 : false,
    3 : false
  }
  


  constructor(
              private triviaService: TriviaService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getShuffledQuestions()
  }

  submit(){
    console.log("submits the answer and makes a new game with the score")
    this.router.navigateByUrl('/');
  }

  getShuffledQuestions(){
    console.log("client is asking for all questions")
    this.triviaService.get_all_questions()
      .then((data) => {
        // console.log(data)
        this.allQuestions = data
        this.shuffle(this.allQuestions) 
        this.testQuestions = this.allQuestions.slice(0,3)
        
      })
      .catch((err) => {console.log(err)})
  }

  shuffle(arr) {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
}



}
