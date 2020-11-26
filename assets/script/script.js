

var question_1 = {
    question: "Who was the first president of the US?",
    answer_1: "Abraham Lincoln",
    answer_2: "Abrahom Lincoln",
    answer_3: "Abrahem Lincoln",
    answer_4: "Abrahim Lincoln",
    correctAns: "Abraham Lincoln"
}

var question_2 = {
    question: "The name of the longest river in the world",
    answer_1: "river Nile",
    answer_2: "river Sanag",
    answer_3: "river Jam",
    answer_4: "river Dibam",
    correctAns: "river Nile"
}

var question_3 = {
    question: "The largest lake in the world is?",
    answer_1: "lake Vecta",
    answer_2: "lake Nyos",
    answer_3: "lake Sama",
    answer_4: "lake Superior",
    correctAns: "lake Superior"
}

var question_4 = {
    question: "What is the tallest mountain in Africa",
    answer_1: "mt Alaska",
    answer_2: "mt Kilamanjero",
    answer_3: "mt Everest",
    answer_4: "mt Cameroon",
    correctAns: "mt Kilamanjero"
}


// create an array containing all the questions
var questions = [];
for (let i = 0; i < 5; i++) {
    questions.push(`question_${i}`);
}
console.log(questions);

// creates the question
function questionaire() {

    function showQuestion() {

        // converts the string in the array of questions into a variable
        let val = Object.values(window[questions[Math.ceil(Math.random() * 4)]]);

        // Displays the question and the answers
        for (let i = 0; i < 5; i++) {
            if (i < 5 && i > 0) {
                console.log(i + ") " + val[i])
            } else if (i == 0) {
                console.log(val[i])
            } else {
                break;
            }
        }

        correctAns();

        // checks if the answer is correct or wrong
        function correctAns() {
            let choice = Number(prompt("choose 1,2,3 or 4"));
            let answer = val[choice];
            if (answer == val[5]) {
                console.log("You have chosen the correct answer");
                showQuestion();

            } else {
                console.log("You have chosen the wrong answer");
                showQuestion();

            }
        }
    }

    showQuestion();

}

questionaire();

