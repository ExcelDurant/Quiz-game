
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

let gameAudio = document.getElementById('game-audio');

//storing all the sounds and the functions to play them
let sounds = {
    gameSound: function () {
        gameAudio.loop = true;
        gameAudio.play();
    },

    clickSound: function(){
        let clickAudio = document.getElementById('click-audio');
        clickAudio.play();
    },

    point1: function(){
        let point1Audio = document.getElementById('point1-audio');
        point1Audio.play();
    },

    point2: function(){
        let point2Audio = document.getElementById('point2-audio');
        point2Audio.play();
    },

    point3: function(){
        let point3Audio = document.getElementById('point3-audio');
        point3Audio.play();
    },

    loseSound: function(){
        let loseAudio = document.getElementById('lose-audio');
        loseAudio.play();
    },

    wrongSound: function(){
        let wrongAudio = document.getElementById('wrong-audio');
        wrongAudio.play();
    }
}

console.log(questions);

var numberOfQuestions = questions.length;

// Point allocation
let points = 0;
let candidateName;
let lives = 3;
let err = document.getElementById('error');
var countdown;
var seconds;



function showQuestion() {
    countdown = setInterval(timer, 1000);
    seconds = 15;
    function timer() {
    seconds--;
    document.getElementById("timer").innerHTML = seconds + "    seconds left";
    if (seconds <= 0) {
        // clearInterval(countdown);
        falseAns();
    }
}
    // Show the next question random question
    val = Object.values(questions[Math.floor(Math.random() * (numberOfQuestions))]);

    // Displays the questions and answers on the interface
    var y = document.getElementsByClassName('question-text');
    y[0].innerHTML = val[0];
    var x = document.getElementsByClassName('answer');
    for (let i = 0; i < 4; i++) {
        x[i].innerHTML = (val[1][i]);
    }

    // Displays the question and the answers without displaying the correct answer in the console
    console.log(val[0]);
    for (let i = 0; i < 4; i++) {
        console.log((i + 1) + ")" + val[1][i]);
    }

}


// checks if the answer is correct or wrong
function correctAns(n) {
    let point = document.getElementsByClassName('point');
    // let choice = Number(prompt('1,2,3 or 4')) - 1;
    let choice = n - 1;
    let answer = val[1][choice];
    if (answer == val[2]) {
        console.log("You have chosen the correct answer");
        // Adding points after successfully answering
        points += 1;
        point[0].innerHTML = points;
        let point1Audio = document.getElementById('point1-audio');
        point1Audio.play();
        showQuestion();
        clearInterval(countdown);
        // err.classList.toggle('green');
        err.innerHTML = 'correct answer';
    } else {
        falseAns();
    }
}

//in case a wrong answer is chosen
function falseAns() {
    // err.classList.toggle('red');
    err.innerHTML = 'wrong answer';
    console.log("You have chosen the wrong answer");
    console.log("your points are", points);
    lives -= 1;
    document.getElementsByClassName('lives')[0].innerHTML = lives;
    console.log("your lives are", lives);
    let wrongAudio = document.getElementById('wrong-audio');
    wrongAudio.play();
    showQuestion();
    clearInterval(countdown);
    if (lives <= -1) {
        document.getElementById("box-4").classList.remove("show-grid");
        sounds.loseSound();
        gameAudio.pause();
        wrongAudio.pause();
        console.log("you failed");
    }
}

//displaying the different boxes(game menus) on button click
function showBox2() {
    document.getElementById("box-1").classList.toggle("hide");
    document.getElementById("box-2").classList.toggle("show");
}

function showBox3() {
    document.getElementById("box-2").classList.remove("show");
    document.getElementById("box-3").classList.toggle("show");
}

function showBox4() {
    //takes in the player name
    candidateName = document.getElementById("name").value;
    let alert = document.getElementsByClassName("alert");
    if (candidateName == "") {
        //alerts when user has not entered his name
        alert[0].innerHTML = "Please enter your name";
    } else {
        console.log(candidateName);
        document.getElementById("box-3").classList.remove("show");
        document.getElementById("box-4").classList.toggle("show-grid");
        //shows the question
        showQuestion();
    }
    return candidateName;
}



let auBtn = document.getElementById('btn1');
let btn = document.getElementsByClassName('btn');
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', sounds.clickSound);
}

auBtn.addEventListener('click', sounds.gameSound);

