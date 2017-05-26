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
    this.allGames = [
      {player: "abe", correctAnswers: 1, numQuestions: 3, },
      {player: "bob", correctAnswers: 2, numQuestions: 3, },
      {player: "cat", correctAnswers: 3, numQuestions: 3, },
      {player: "dan", correctAnswers: 2, numQuestions: 3, },
      {player: "edd", correctAnswers: 1, numQuestions: 3, }

    ]
  }

  play(){
    console.log("play a game")
    this.router.navigateByUrl('/test');
  }

}
