"use strict";
//Question bank
const rate = [];
const questionBank = [
  {
    question: "What do you think my name is?",
    option: ["Andrew Youg", "George Gatete", "James Mainaina", "Andrew Young"],
    answer: "Andrew Young",
  },
  {
    question: "What is my approximate height ?",
    option: ["1.69m", "1.74m", "1.81m", "1.92m"],
    answer: "1.81m",
  },
  {
    question:
      "Hey! can you guess my actual age suppose i was borned 20 years ago? ",
    option: ["26 years", "23 years", "19 years", "20 years"],
    answer: "20 years",
  },
  {
    question: "Predict the range of my weight for the last four years?",
    option: ["(60 - 66)Kg", "(54 - 60)Kg", "(66 - 70)Kg", "(71 - 74)Kg"],
    answer: "(66 - 70)Kg",
  },
  {
    question:
      "i'm a fun of one of the big clubs in London. Which club could it be?",
    option: ["Manchester City", "Arsenal", "Chelsea", "Manchester United"],
    answer: "Manchester United",
  },
  {
    question: "What is my favourite meal?",
    option: ["Fish", "Pizza", "Hot Dog", "Beef"],
    answer: "Fish",
  },

  {
    question: "Hey! can you guess my marital status? if yes please select",
    option: ["Abandoned", "Engaged", "Single", "Divorced"],
    answer: "Single",
  },
  {
    question: "Predict my favourite hobby?",
    option: ["Playing Karate", "Praying", "Watching Football", "Reading"],
    answer: "Watching Football",
  },
  {
    question: "What is my religion?",
    option: ["Budhist", "Muslim", "Roman Catholic", "Christian"],
    answer: "Roman Catholic",
  },
];

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scoreboard = document.getElementById("scoreboard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let stats = document.getElementById("stat");
let answerBank = document.getElementById("answerBank");
let answers = document.getElementById("answers");
let remarks = document.getElementById("remarks");
let questions = document.querySelector(".questions");
let initialRate = document.getElementById("initial-rate");

let submitEl = document.getElementById("submit");
let rateEl = document.querySelector(".rate");
let provisionalEl = document.querySelector(".provisional");
let commentEl = document.getElementById("comment");
let i = 0;
let score = 0;
questions.classList.add("hidden");
next.classList.add("hidden");

submitEl.addEventListener("click", function () {
  rateEl.classList.toggle("hidden");
  provisionalEl.style.display = "block";
  const initialScore = Number(document.querySelector(".rateme").value);
  if (!initialScore) {
    alert("Please enter your rate to proceed");
    location.reload();
  } else if (initialScore <= 0 || initialScore > 100) {
    alert("Please enter a value between the scale given");
    location.reload();
  } else {
    commentEl.textContent = `You gave me a Rate of ${initialScore}% `;
  }
});
//console.log(initialScore);

document.getElementById("proceed").addEventListener("click", function () {
  provisionalEl.style.display = "none";
  questions.classList.remove("hidden");
});

//function to display questions
function displayQuestion() {
  for (let a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.textContent = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.textContent = questionBank[i].option[0];
  option1.textContent = questionBank[i].option[1];
  option2.textContent = questionBank[i].option[2];
  option3.textContent = questionBank[i].option[3];
  stats.textContent =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.textContent === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    if (score <= 3) {
      remarks.textContent = "Good Trial";
    } else {
      remarks.textContent = "Congratulation";
    }
    const initialScore = Number(document.querySelector(".rateme").value);
    initialRate.textContent = `Your initial Rate ${initialScore}%`;
    points.textContent = Math.round((score / questionBank.length) * 100) + "%";
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//click events to next button
next.addEventListener("click", nextQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//function to check Answers
function checkAnswer() {
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (let a = 0; a < questionBank.length; a++) {
    let list = document.createElement("li");
    list.textContent = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
