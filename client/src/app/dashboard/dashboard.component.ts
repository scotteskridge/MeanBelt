import { Component, OnInit } from '@angular/core';
import { TriviaService } from "app/trivia.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allGames = []
  storage = window['localStorage']

  constructor(private triviaService: TriviaService,
              private router: Router
              ) { }

  ngOnInit() {
    // this.allGames = [
    //   {player: "abe", correctAnswers: 1, numQuestions: 3, },
    //   {player: "bob", correctAnswers: 2, numQuestions: 3, },
    //   {player: "cat", correctAnswers: 3, numQuestions: 3, },
    //   {player: "dan", correctAnswers: 2, numQuestions: 3, },
    //   {player: "edd", correctAnswers: 1, numQuestions: 3, }

    // ]
    this.getAllGames()
  }

  play(){
    console.log("play a game")
    this.router.navigateByUrl('/test');
  }

  getAllGames(){
    console.log("client is asking for all games")
    this.triviaService.get_all_games()
      .then((data) => {
        console.log("client received this as data", data)
        // console.log(data)
        this.allGames = data
        
       
        
      })
      .catch((err) => {console.log(err)})
  }

}
