export class Game {
    player;
    numQuestions;
    correctAnswers;
    createdAt;
    updatedAt;
    _id;

    constructor(player = "", num = 3, correct = 0){
        this.player = player
        this.numQuestions = num
        this.correctAnswers = correct
    }
    percentage(){
        return this.correctAnswers / this.numQuestions
    }
}
