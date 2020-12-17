
// create an array containing all the questions
var questions = [

    //easy questions
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
    },

    {
        question: "What is the chemical formula for Table Salt?",
        answers: ["CuSO4", "MgSO4", "NaCl", "NaSO4"],
        correctAns: "NaCl"
    },

    {
        question: "Which singer was known amongst other things as 'The King of Pop'?",
        answers: ["Taylor Swift", "Michael Jackson", "Justin Bieber", "Bruno Mars"],
        correctAns: "Michael Jackson"
    },

    {
        question: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
        answers: ["Call Of Duty", "Battlefield", "Medal of Honor", "Desert Storm"],
        correctAns: "Call Of Duty"
    },

    {
        question: "What is the smallest planet in our solar system?",
        answers: ["Venus", "Mars", "Mercury", "Pluto"],
        correctAns: "Mercury"
    },

    {
        question: "On average how far away is the moon from the earth in miles?",
        answers: ["248000", "550000", "238000", "1250000"],
        correctAns: "238000"
    },

    {
        question: "What temperature centigrade does water boil at?",
        answers: ["200 degrees centigrade", "100 degrees centigrade", "150 degrees centigrade", "80 degrees centigrade"],
        correctAns: "100 degrees centigrade"
    }

]

let gameAudio = document.getElementById('game-audio');

//storing all the sounds and the functions to play them
let sounds = {
    point1Audio: document.getElementById('point1-audio'),
    wrongAudio: document.getElementById('wrong-audio'),
    point2Audio: document.getElementById('point2-audio'),
    point3Audio: document.getElementById('point3-audio'),

    gameSound: function () {
        gameAudio.loop = true;
        gameAudio.play();
    },

    clickSound: function () {
        let clickAudio = document.getElementById('click-audio');
        clickAudio.play();
    },

    point1: function () {
        let point1Audio = document.getElementById('point1-audio');
        point1Audio.play();
    },

    point2: function () {
        let point2Audio = document.getElementById('point2-audio');
        point2Audio.play();
    },

    point3: function () {
        let point3Audio = document.getElementById('point3-audio');
        point3Audio.play();
    },

    loseSound: function () {
        let loseAudio = document.getElementById('lose-audio');
        loseAudio.play();
    },

    wrongSound: function () {
        let wrongAudio = document.getElementById('wrong-audio');
        wrongAudio.play();
    }
}

console.log(questions);

var numberOfQuestions = questions.length;

// Point allocation
let points = 0;
let candidateName;
let lives;
let err = document.getElementById('error');
var countdown;
var seconds;



function showQuestion() {
    document.getElementsByClassName('lives')[0].innerHTML = lives;
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
        // Adding points after successfully answering
        if (seconds >= 12) {
            points += 3;
            sounds.point3Audio.play();
        } else if (seconds >= 8 && seconds < 12) {
            points += 2;
            sounds.point2Audio.play();
        } else {
            points += 1;
            sounds.point1Audio.play();
        }
        console.log("You have chosen the correct answer");
        point[0].innerHTML = points;
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
    sounds.wrongAudio.play();
    showQuestion();
    clearInterval(countdown);
    if (lives <= -1) {
        document.getElementById("box-4").classList.remove("show-grid");
        showBox6();
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
        document.getElementById("box-4").classList.toggle("show");
    }
    return candidateName;
}

function showBox5(n) {
    document.getElementById("box-4").classList.remove("show");
    document.getElementById("box-5").classList.toggle("show-grid");
    lives = n;
    //shows the question
    showQuestion();
}

function showBox6() {
    document.getElementsByClassName('candidate')[0].innerHTML = candidateName;
    document.getElementsByClassName('points')[1].innerHTML = points;
    document.getElementById("box-5").classList.remove("show-grid");
    document.getElementById("box-6").classList.remove("hide");
}


//adding sounds on click
let auBtn = document.getElementById('btn1');
let btn = document.getElementsByClassName('btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', sounds.clickSound);
}
auBtn.addEventListener('click', sounds.gameSound);

