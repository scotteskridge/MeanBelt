import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./User"
import "rxjs"


const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})

@Injectable()
export class TriviaService {
  testing=false

  constructor(private http: Http) { }

  login(data){
    console.log("the user service tried to login:", data)
    return this.http.post(`/user/login`, data, OPTIONS)
    .map(res => res.json()).toPromise()
  }

  create_question(question){
    console.log("service is sending", question)
    return this.http.post("/questions/createQuestion", question, OPTIONS)
      .toPromise()
  }

  deleteQuestion(question){
    return this.http.post("/questions/deleteQuestion", question, OPTIONS)
      .toPromise()
  }

  get_all_questions(){
    console.log("service is asking for all questions")
    return this.http.get("/questions/get_allQuestions")
      .map(data => data.json())
      .toPromise()
  }

   create_game(game){
     console.log("service is sending a game", game)
    return this.http.post("/games/createGame", game, OPTIONS).toPromise()
  }

  get_all_games(){
    console.log("service asked for all games")
    return this.http.get("/games/get_allGames")
      .map(data => data.json())
      .toPromise()
  }



}
