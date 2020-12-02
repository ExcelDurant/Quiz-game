
// create an array containing all the questions
var questions = [
    {
        question: "Who was the first president of the US?",
        answers: ["Abraham Lincoln", "Abraham Lincon", "Abrahom Lincoln", "Abraham Lancoln"],
        correctAns: "Abraham Lincoln"
    },

    {
        question: "The name of the longest river in the world",
        answers: ["river Nile", "river Sanag", "river Jam", "river Dibam"],
        correctAns: "river Nile"
    },

    {
        question: "The largest lake in the world is?",
        answers: ["lake Vecta", "lake Nyos", "lake Sama", "lake Superior"],
        correctAns: "lake Superior"
    },

    {
        question: "What is the tallest mountain in Africa",
        answers: ["mt Alaska", "mt Kilamanjero", "mt Everest", "mt Cameroon"],
        correctAns: "mt Kilamanjero"
    },

    {
        question: "who are you?",
        answers: ["me", "you", "I don know", "you and me"],
        correctAns: "me"
    }

]

console.log(questions);

var numberOfQuestions = questions.length;

// Point allocation
let points = 0;

// produces an array containing the questions and the answers from the array of objects(randomly)
let val = Object.values(questions[Math.floor(Math.random() * (numberOfQuestions))]);

function showQuestion() {

    // Displays the questions and answers on the interface
    var y = document.getElementsByClassName('question-text');
    y[0].innerHTML = val[0];
    var x = document.getElementsByClassName('answer');
    for (let i = 0; i < 4; i++) {
        x[i].innerHTML = (val[1][i])
    }

    // Displays the question and the answers without displaying the correct answer in the console
    console.log(val[0])
    for (let i = 0; i < 4; i++) {
        console.log((i + 1) + ")" + val[1][i])
    }


}

// checks if the answer is correct or wrong
function correctAns(n) {
    let err = document.getElementById('interval');
    let point = document.getElementsByClassName('point');
    // let choice = Number(prompt('1,2,3 or 4')) - 1;
    let choice = n - 1;
    let answer = val[1][choice];
    if (answer == val[2]) {
        console.log("You have chosen the correct answer");
        // Adding points after successfully answering
        points += 1;
        point[0].innerHTML = points;
        // Show the next question random question
        val = Object.values(questions[Math.floor(Math.random() * (numberOfQuestions))]);
        showQuestion();
    } else {
        err.innerHTML = 'wrong answer';
        console.log("You have chosen the wrong answer");
        console.log("your points are", points);
    }
}

showQuestion();









