
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
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["Mount Everest", "Mount K2", "Mount Makalu", "Mount Cho Oyu"],
        correctAns: "Mount Everest"
    },
    {
        question: "What part of a plant conducts photosynthesis?",
        answers: ["Stem", "root", "leaf", "flower"],
        correctAns: "leaf"
    },
    {
        question: "How many elements are in the periodic table?",
        answers: ["102", "118", "116", "119"],
        correctAns: "118"
    },
    {
        question: "Elon Musk is the CEO of which global brand",
        answers: ["Xbox", "Tesla", "Sony", "Toyota"],
        correctAns: "Tesla"
    },
    {
        question: "Which operating system does a Google Pixel phone use",
        answers: ["Pixel", "Kindle", "IOS", "Android"],
        correctAns: "Android"
    },
    {
        question: "Who killed Tony Stark’s parents?",
        answers: ["Spiderman", "Captain America", "The Winter Soldier", "Black Panther"],
        correctAns: "The Winter Soldier"
    },
    {
        question: "What is the highest-grossing Marvel movie without the word ‘Avengers’ in the title",
        answers: ["Spiderman 2", "Black Panther", "Iron Man", "Captain Marvel"],
        correctAns: "Black Panther"
    },
    {
        question: "Botany is the study of what life form?",
        answers: ["ants", "fish", "Plants", "birds"],
        correctAns: "Plants"
    },
    {
        question: "What is the largest animal on the planet?",
        answers: ["Sperm whale", "Cashalo", "Elephant", "Blue whale"],
        correctAns: "Blue whale"
    },
    {
        question: "What causes John Wick to return to his old life of crime in John Wick?",
        answers: ["His wife’s death", "His dog’s murder", "his house was destroyed", "His car was stolen"],
        correctAns: "His dog’s murder"
    },
    {
        question: "Who plays John J Rambo in Rambo?",
        answers: ["Sylvester Stallone", "Keanu Reeves", "Dwayne Johnson", "Jason Statham"],
        correctAns: "Sylvester Stallone"
    },

    {
        question: "How high is Mount Everest in metres?",
        answers: ["8,848m", "8100m", "1145m", "9456m"],
        correctAns: "8,848 metres"
    },

    {
        question: "What is the most spoken language in the world?",
        answers: ["English", "Spanish", "Japanese", "Mandarin"],
        correctAns: "Mandarin"
    },

    {
        question: "In the film The Lion King, what kind of animal is Timon?",
        answers: ["Squirrel", "Rat", "Meerkat", "Bush Pig"],
        correctAns: "Meerkat"
    },

    {
        question: "How many legs does a lobster have?",
        answers: ["6", "7", "8", "5"],
        correctAns: "8"
    },

    {
        question: "How many teeth does an adult human have?",
        answers: ["40", "32", "36", "24"],
        correctAns: "32"
    },

    {
        question: "What is the tallest building in the world",
        answers: ["Shanghai Tower", "Empire State Tower", "Burj Khalifa", "One World Trade Center"],
        correctAns: "Burj Khalifa"
    },

    {
        question: "What famous man became president of his country after being in jail for 18 years?",
        answers: ["Abraham Lincoln", "Nelson Mandela", "Martin Luther King", "George Washington"],
        correctAns: "Nelson Mandela"
    },

    {
        question: "Which animal is genetically closest to humans?",
        answers: ["baboon", "rat", "Chimpanzee", "bat"],
        correctAns: "Chimpanzee"
    },

    {
        question: "What percentage of the human body is water?",
        answers: ["60 percent", "70 percent", "20 percent", "30 percent"],
        correctAns: "60 percent"
    },

    {
        question: "How many fingers do Simpsons characters have?",
        answers: ["3", "5", "4", "6"],
        correctAns: "4"
    },

    {
        question: "What is the name of the biggest technology company in South Korea?",
        answers: ["Samsung", "Greenlabs", "Webtoon", "Nokia"],
        correctAns: "Samsung"
    },


    // Medium questions

    {
        question: "What are the five colours of the Olympic rings?",
        answers: [" Blue, White, Black, Purple and Orange", "Blue, Yellow, Black, Green and Red", " Blue, White, Orange, Green and Red", " Blue, Yellow, Orange, Green and Red"],
        correctAns: "Blue, Yellow, Black, Green and Red"
    },

    {
        question: "How many players are there in a rugby league team?",
        answers: ["14", "7", "13", "10"],
        correctAns: "13"
    },

    {
        question: "Who won the FIFA Women's World Cup in 2019?",
        answers: ["Brazil", "Russia", "Germany", "USA"],
        correctAns: "USA"
    },

    {
        question: "What is the middle name of Angela Merkel?",
        answers: ["Dorothea", "Rachel", "Lang", "Helen"],
        correctAns: "Dorothea"
    },

    {
        question: "Which vitamin is the only one that you will not find in an egg?",
        answers: ["Vitamin C", "Vitamin E", "Vitamin D", "Vitamin A"],
        correctAns: "Vitamin C"
    },

    {
        question: "Which year was the Premier League founded?",
        answers: ["2000", "1993", "1992", "1982"],
        correctAns: "1992"
    },

    {
        question: "Which club won the 2017 UEFA Super Cup?",
        answers: ["Real Madrid", "Liverpol", "Bayern Munich", "Barcelona"],
        correctAns: "Real Madrid"
    },

    {
        question: "Which footballer has the most Instagram followers in the world - as of 2020(2021)?",
        answers: ["Diego Maradona", "Neymar", "Lionnel Messi", "Cristiano Ronaldo"],
        correctAns: "Cristiano Ronaldo"
    },

    {
        question: "What’s the chemical symbol for silver?",
        answers: ["Si", "Cl", "Ag", "Ar"],
        correctAns: "Ag"
    },

    {
        question: "What is the capital city of Switzerland?",
        answers: ["Lugano", "Basel", "Geneva", "Bern"],
        correctAns: "Bern"
    },

    {
        question: "How many permanent teeth does a dog have?",
        answers: ["42", "56", "30", "25"],
        correctAns: "42"
    },

    {
        question: "How many permanent teeth does a dog have?",
        answers: ["42", "56", "30", "25"],
        correctAns: "42"
    },

    {
        question: "What’s longer, a nautical mile or a mile?",
        answers: ["mile", "Nautical mile", "both", "not know"],
        correctAns: "Nautical mile"
    },

    {
        question: "Which country in the world is believed to have the most miles of motorway?(",
        answers: ["USA", "Germany", "Japan", "China"],
        correctAns: "China"
    },

    {
        question: "In what decade was pop icon Madonna born?",
        answers: ["1950s", "1960s", "1980s", "1970s"],
        correctAns: "1950s"
    },

    {
        question: "What is the capital city of Australia?",
        answers: ["Darwin", "Sydney", "Perth", "Canberra"],
        correctAns: "Canberra"
    },

    {
        question: "What language is spoken in Brazil?",
        answers: ["Portuguese", "Spanish", "English", "Latin"],
        correctAns: "Portuguese"
    },

    {
        question: "What company is also the name of one of the longest rivers in the world?",
        answers: ["Ebay", "Yellow", "Amazon", "Nike"],
        correctAns: "Amazon"
    },

    {
        question: "What language is spoken in Norway?",
        answers: ["English", "Norse", "Norwegian", "Deutsch"],
        correctAns: "Norwegian"
    },

    {
        question: "What number is a baker’s dozen?",
        answers: ["33", "20", "12", "13"],
        correctAns: "13"
    },

    {
        question: "Which planet has the most moons?",
        answers: ["Jupiter", "Saturn", "Neptune", "Mars"],
        correctAns: "Saturn"
    },

    {
        question: "Where is the smallest bone in the human body located?",
        answers: ["nail", "toe", "ear", "nose"],
        correctAns: "ear"
    },

    {
        question: "How many hearts does an octopus have?",
        answers: ["1", "2", "3", "4"],
        correctAns: "3"
    },

    {
        question: "With over 222 million units sold, what is Apple’s highest-selling iPhone model?",
        answers: ["iPhone 10", "iPhone 8", "iPhone 6", "iPhone 4"],
        correctAns: "iPhone 6"
    },

    {
        question: "In which year was the Microsoft XP operating system released?",
        answers: ["2001", "1999", "2002", "1998"],
        correctAns: "2001"
    },

    {
        question: "Natasha Romanova is the real name of which superhero?",
        answers: ["Cat Woman", "Wonder Woman", "Captain Marvel", "Black Widow"],
        correctAns: "Black Widow"
    },

    {
        question: "What is the capital of Canada?",
        answers: ["Calgary", "Montreal", "Toronto", "Ottawa"],
        correctAns: "Ottawa"
    },

    {
        question: "A DNA molecule is described as being what shape?",
        answers: ["Double helix", "square", "circular", "U-shaped"],
        correctAns: "Double helix"
    },

    {
        question: "Which process converts sugar to acids, alcohol or gases?",
        answers: ["alcoholization", "Fermentation", "crystallization", "Pollination"],
        correctAns: "Fermentation"
    },

    {
        question: "Which chamber of the heart pumps deoxygenated blood to the lungs?",
        answers: ["Right ventricle", "Left ventricle", "Pulmonary Artery", "Right Atrium"],
        correctAns: "Right ventricle"
    },

    {
        question: "How many bones are there in the average adult human body?",
        answers: ["523", "102", "1115", "206"],
        correctAns: "206"
    },

    {
        question: "What percentage of the Earth’s surface is made up of the Atlantic Ocean?",
        answers: ["80 per cent", "50 per cent", "20 per cent", "30 per cent"],
        correctAns: "20 per cent"
    },

    {
        question: "What colour is found on 75% of the world’s flags?",
        answers: ["green", "yellow", "blue", "red"],
        correctAns: "red"
    },

    {
        question: "Which film was the first to be recognised as part of the Marvel Cinematic Universe?",
        answers: ["Batman", "Spiderman", "Iron Man", "Black Panther"],
        correctAns: "Iron Man"
    },

    {
        question: "What colour is a giraffe's tongue?",
        answers: ["Green", "Blue", "Red", "Orange"],
        correctAns: "Blue"
    },

    {
        question: "In which century did Leonardo da Vinci paint The Last Supper?",
        answers: ["Fifteenth century", "Seventh century", "Fourteenth century", "Eighteenth century"],
        correctAns: "Fifteenth century"
    },

    {
        question: "Which sign of the Zodiac is represented by the Scales?",
        answers: ["Virgo", "Gemini", "Capricorn", "Libra"],
        correctAns: "Libra"
    },

    {
        question: "In what year was the first Playstation console released?",
        answers: ["2000", "1994", "1996", "1990"],
        correctAns: "1994"
    },

    {
        question: "What is the strongest sense in humans?",
        answers: ["Smell", "Sight", "Hearing", "Taste"],
        correctAns: "Smell"
    },

    {
        question: "What is the highest-grossing Pixar film? ",
        answers: ["Brave", "Cars 3", "Toy Story 4", "The Incredibles 2"],
        correctAns: "The Incredibles 2"
    },

    {
        question: "112.	How old do you have to be to stand for US president?",
        answers: ["35-years-old", "25-years-old", "40-years-old", "15-years-old"],
        correctAns: "35-years-old"
    },

    {
        question: "How much does the average male hippo weigh (in kg)?",
        answers: ["500-900kg", "1,500-1,800kg", "2,500-2800kg", "10,000-11,000kg"],
        correctAns: "1,500-1,800kg"
    },

    {
        question: "What is the chemical symbol for gold?",
        answers: ["Na", "Si", "Au", "Li"],
        correctAns: "Au"
    },

    {
        question: "Which is the only vowel not used as the first letter in a US State?",
        answers: ["A", "E", "I", "O"],
        correctAns: "E"
    },

    {
        question: "To the tip - how tall is the Eiffel Tower?",
        answers: ["170 m", "856 m", "324 m", "502 m"],
        correctAns: "324 m"
    },

    {
        question: "Which bird can fly backwards?",
        answers: ["Hummingbird", "eagle", "owl", "vulture"],
        correctAns: "Hummingbird"
    },

    {
        question: "What name is given to an adult female sheep?",
        answers: ["Ewe", "She-sheep", "Lamb", "Emel"],
        correctAns: "Ewe"
    },

    {
        question: "What year did the Titanic sink in the Atlantic Ocean on 15 April?",
        answers: ["1900", "1945", "1912", "1962"],
        correctAns: "1912"
    },

    {
        question: "How many breaths does the human body take daily?",
        answers: ["500,000 daily", "1,500 daily", "20,000 daily", "9,000 daily"],
        correctAns: "20,000 daily"
    },

    {
        question: "What is the lifespan of a dragonfly? ",
        answers: ["1 week", "1 year", "24 hours", "5 days"],
        correctAns: "24 hours"
    },

    {
        question: "If the Earth were made into a black hole, what would be the diameter of its event horizon?",
        answers: ["20mm", "1km", "20cm", "20km"],
        correctAns: "20mm"
    },

    {
        question: "What is the furthest you can see with the naked eye?",
        answers: ["10km", "50km", "5km", "2.5 million light years"],
        correctAns: "2.5 million light years"
    },

    {
        question: "To the nearest thousand, how many hairs are there on a typical human head?",
        answers: ["1,000,000 hairs", "200 hairs", "10,000 hairs", "45,000 hairs"],
        correctAns: "10,000 hairs"
    },

    {
        question: "What is the largest bird of prey in the world?",
        answers: ["Mute Swan", "Cinereous Vulture", "Dalmatian Pelican", "Andean Condor"],
        correctAns: "Andean Condor"
    },

    {
        question: "What is the hottest chilli pepper in the world?",
        answers: ["Carolina Reaper", "Chocolate Bhutlah", "Pot Douglah", "Dorset Naga"],
        correctAns: "Carolina Reaper"
    },

    {
        question: "What is the biggest state in America?",
        answers: ["Texas", "California", "Montana", "Alaska"],
        correctAns: "Alaska"
    },

    {
        question: "What is the world’s smallest bird?",
        answers: ["lesser goldfinch", "bee Hummingbird", "verdin", "goldcrest"],
        correctAns: "bee Hummingbird"
    },

    {
        question: "What’s the average surface temperature on Venus?",
        answers: ["600°C", "1080°C", "170°C", "460°C"],
        correctAns: "460°C"
    }

    // {
    //     question: "",
    //     answers: [""],
    //     correctAns: ""
    // },

    // {
    //     question: "",
    //     answers: [""],
    //     correctAns: ""
    // },

    // {
    //     question: "",
    //     answers: [""],
    //     correctAns: ""
    // },

    // {
    //     question: "",
    //     answers: [""],
    //     correctAns: ""
    // },

    // {
    //     question: "",
    //     answers: [""],
    //     correctAns: ""
    // }

]

let insults = {
    ins1: "are you serious?",
    ins2: "you are a fool",
    ins3: "you are a sheep",
    ins4: "you are supposed to be ashamed of yourself",
    ins5: "go and hide in your room",
    ins6: "you can do better",
    ins7: "that is good",
    ins8: "you are more intelligent than 80 percent of people in this country",
    ins9: "are you not secretly a genius?"
}

let gameAudio = document.getElementById('game-audio');

//storing all the sounds and the functions to play them
let sounds = {
    point1Audio: document.getElementById('point1-audio'),
    wrongAudio: document.getElementById('wrong-audio'),
    point2Audio: document.getElementById('point2-audio'),
    point3Audio: document.getElementById('point3-audio'),
    loseAudio: document.getElementById('lose-audio'),

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
    // Show the next random question
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
        sounds.loseAudio.play();
        gameAudio.pause();
        sounds.wrongAudio.pause();
        console.log("you failed");
        lives--;
    }
    if(lives < -1){
        sounds.loseAudio.pause();
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
    let insult = document.getElementsByClassName('insult')[0];
    document.getElementsByClassName('candidate')[0].innerHTML = candidateName;
    if (points <= 10) {
        insult.innerHTML = insults.ins1;
    } else if (points <= 20 && points > 10) {
        insult.innerHTML = insults.ins2;
    } else if (points <= 30 && points > 20) {
        insult.innerHTML = insults.ins3;
    } else if (points <= 40 && points > 30) {
        insult.innerHTML = insults.ins4;
    } else if (points <= 50 && points > 40) {
        insult.innerHTML = insults.ins5;
    } else if (points <= 80 && points > 50) {
        insult.innerHTML = insults.ins6;
    } else if (points <= 90 && points > 80) {
        insult.innerHTML = insults.ins7;
    } else if (points <= 100 && points > 90) {
        insult.innerHTML = insults.ins8;
    } else {
        insult.innerHTML = insults.ins9;
    }
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

