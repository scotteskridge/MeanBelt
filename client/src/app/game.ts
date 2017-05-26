export class Game {
    player;
    numQuestions;
    correctAnswers;
    createdAt;
    updatedAt;
    _id;

    percentage(){
        return this.correctAnswers / this.numQuestions
    }
}
