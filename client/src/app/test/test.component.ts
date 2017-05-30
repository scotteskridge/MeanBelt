import { Component, OnInit } from '@angular/core';
import { TriviaService } from "app/trivia.service";
import { Router } from "@angular/router";
import { Question } from "app/question";
import { Game } from "app/game";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  storage = window['localStorage']
  allQuestions: Question[]
  testQuestions: Question[]
  tally = {
    "1" : "",
    "2": "",
    "3": ""
  }
  qNum = 3
  isDataAvailable = false
  // newGame = new Game

  

  
  


  constructor(
              private triviaService: TriviaService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getShuffledQuestions()
  }

  submit(){
    let newGame = new Game(this.storage.user, this.qNum, this.tallyScore()) 
    console.log("submits the answer and makes a new game with the score", newGame)
    this.triviaService.create_game(newGame)
      .then((data) => {
        //redirect to root once this is working
      this.router.navigateByUrl('/');
      // this.getAllQuestions()
    })
      .catch((err) => {console.log(err)})
    // this.router.navigateByUrl('/');
  }

  tallyScore(){
    let score = 0
    for(let key in this.tally){
      let id = this.tally[key] 
        for (let question of this.testQuestions){
          for (let answer of question.answers){
            if (id == answer._id){
              if(answer.value == true){
                score++
              }
            }
          }
        }
      }
      console.log(score)
    return score 
  }

  getShuffledQuestions(){
    console.log("client is asking for all questions")
    this.triviaService.get_all_questions()
      .then((data) => {
        // console.log(data)
        this.allQuestions = data
        this.shuffle(this.allQuestions) 
        this.testQuestions = this.allQuestions.slice(0,this.qNum)
        // console.log("the testQuestion object:",this.testQuestions)
        for (let question of this.testQuestions){
          // console.log("inside the for loop a querstion is:" , question)
           this.shuffle(question.answers)
        }
        this.isDataAvailable = true
        return true
       
        
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
