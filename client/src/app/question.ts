export class Question {
    ask;
    answers = []
    createdAt;
    updatedAt;
    _id;

}


export class Answer {
    answer;
    value: boolean
    createdAt;
    updatedAt;
    _id;

    constructor(ans = "", val = false){
        this.answer = ans
        this.value = val
    }

}
