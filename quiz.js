const questions = [
  {
    number: 1,
    que: "Who are you?",
    ans1: "Instructor",
    ans2: "Umich Student",
    ans3: "Yujin's Family",
    ans4: "Yujin's Friend",
    ans: "1"
  },
  {
    number: 2,
    que: "What is Yujin's last name?",
    ans1: "Lee",
    ans2: "Li",
    ans3: "Kim",
    ans4: "Choi",
    ans: "3"
  },
  {
    number: 3,
    que: "Yujin is currently a ___-year student",
    ans1: "first",
    ans2: "second",
    ans3: "third",
    ans4: "None of Above",
    ans: "2"
  },
  {
    number: 4,
    que: "This is a field Yujin is NOT interested in going into..",
    ans1: "Visual Arts",
    ans2: "Data Analytics",
    ans3: "Business Analytics",
    ans4: "Tech Consulting",
    ans: "1"
  },
  {
    number: 5,
    que: "Which language can Yujin not speak?",
    ans1: "Korean",
    ans2: "English",
    ans3: "Maori",
    ans4: "Spanish",
    ans: "4"
  },
  {
    number: 6,
    que: "Yujin has not lived in ___ before.",
    ans1: "Netherlands",
    ans2: "New Zealand",
    ans3: "Korea",
    ans4: "United States",
    ans: "1"
  },
  {
    number: 7,
    que: "Which instrument does Yujin play?",
    ans1: "drum",
    ans2: "flute",
    ans3: "trombone",
    ans4: "guitar",
    ans: "2"
  },
  {
    number: 8,
    que: "Which Umich school is Yujin not affiliated with?",
    ans1: "LSA",
    ans2: "UMSI",
    ans3: "Ross",
    ans4: "STAMPS",
    ans: "4"
  },
  {
    number: 9,
    que: "How many siblings does Yujin have?",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "none of the above - she's an only child!",
    ans: "4"
  },
  {
    number: 10,
    que: "How many students has Yujin tutored? (She set up a global tutoring business to teach IB studnets online! She also works as a tutor for Student Athletes and the CSP program at Umich!)",
    ans1: "1-10",
    ans2: "11-20",
    ans3: "21-30",
    ans4: "31-40",
    ans: "3"
  }
]
const liveScore = document.querySelector(".live-score");
const time = document.querySelector(".time");
const userName = document.querySelector(".user-name");
const massageArea = document.querySelector(".display-massage");

// buttons......
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const cirtificateHideBtn = document.querySelector(".cancel-btn");
let question = document.querySelector(".question-section")

const cirtificate = document.querySelector(".complete");

const nameBtn = document.querySelector(".name-btn");
let name = prompt("enter your name", "");
nameBtn.addEventListener('click', () => {
  document.querySelector(".collect-name").value = name;
  nameBtn.remove();
})

let currentScore = 0;

let i = 0;

function worngansalert(msg) {
  massageArea.textContent = "OHH! Worng Answer😥";
  massageArea.style.color = "red";
}
function rightansalert() {
  massageArea.textContent = "Great! Correct Answer😍"
  massageArea.style.color = "green";
}


userName.textContent = `" ${name} "`;

const startUsername = document.querySelector(".start-username")
startUsername.textContent = ` Welcome! ${name}`

const startBtn = document.querySelector(".start-btn");
const startPage = document.querySelector(".start-section");

startBtn.addEventListener('click', () => {
  startPage.classList.add("start-section-hide");
  document.querySelector(".quiz-container").style.display = "block";
  // made it so that the quiz container can only show up when the quiz is started by user
  Createquestion(questions[0].number, questions[0].que, questions[0].ans1, questions[0].ans2, questions[0].ans3, questions[0].ans4);
  console.log(name)

})


function Createquestion(number, que, ans1, ans2, ans3, ans4) {

  const newquestin = document.createElement('div');
  // console.log(newquestin)
  // newquestin.classList.add("question-section");
  newquestin.innerHTML = ` <!-- <div class="question-title"> -->
    <p class="question-title-no">${number}</p>
    <h1 class="question">👉${que}</h1>
<!-- </div> -->
<form class="answers">
   <div class="ans" id="1">
    <input class="check" type="radio" value="1" name="ans" id="ans">
    <label for="">${ans1}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="2" name="ans" id="ans">
    <label for="">${ans2}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="3" name="ans" id="ans">
    <label for="">${ans3}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="4" name="ans" id="ans">
    <label for="">${ans4}</label>
   </div>
</form>`

  question.appendChild(newquestin);

}

function Removequestion() {
  document.querySelector(".question-section").innerHTML = "";
}


let ansi = 0;

function Calculatescore() {
  let inputvalue;
  // let userAns =[];
  const checkip = document.getElementsByClassName('check');
  for (let i = 0; checkip[i]; i++) {
    if (checkip[i].checked) {
      inputvalue = checkip[i].value;
      break;
    }
  }
  //  console.log(inputvalue)
  let actualAns = questions[ansi++].ans;
  console.log({ actualAns, inputvalue })
  if (actualAns === inputvalue) {
    currentScore += 10;
    rightansalert();
    setTimeout(() => {
      massageArea.textContent = "";
    }, 1500);
  }
  else if (actualAns !== inputvalue) {
    worngansalert("OH! Worng Answer");
    setTimeout(() => {
      massageArea.textContent = "";
    }, 1500);
  }
  document.querySelector(".current-score").textContent = currentScore + "%";
}

//  function for citrificate showing .)))))))))))))))))))))))))))))))))))))))))))))))000000

function generateCirtificate() {

  const date = new Date();
  const yr = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const dateSec = document.querySelector(".current-date");
  const scoreSec = document.querySelector(".cirtificate-score");
  const nameSec = document.querySelector(".cirtificate-name");
  const idSec = document.querySelector(".cirtificate-id");

  // assigning values ... to cirtificate ..........
  scoreSec.textContent = currentScore + "% ";
  nameSec.textContent = name;
  idSec.textContent = " Congratulations! You have completed the quiz on YUJIN successfully!";
  date.textContent = month + "/" + day + "/" + yr;

  // hide cirtificate.....
  cirtificateHideBtn.addEventListener('click', () => {
    hideCirtificate();
    restartQuiz();
  })


}

function hideCirtificate() {
  cirtificate.classList.add("complete-hide");

}
function restartQuiz() {
  currentScore = 0;
  i = 0;
}


nextBtn.addEventListener('click', () => {
  Calculatescore();


  Removequestion();
  if (i === questions.length - 1) {
    cirtificate.classList.remove("complete-hide");
    generateCirtificate();
    // console.log("ses");

  }
  i++;
  Createquestion(questions[i].number, questions[i].que, questions[i].ans1, questions[i].ans2, questions[i].ans3, questions[i].ans4);

})

let timeLeft = 1200; // 10 minutes in seconds

const countdown = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Display the remaining time
  time.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Check if time is up
  if (timeLeft === 0) {
    clearInterval(countdown);
    // Generate certificate or perform other actions
  }

  timeLeft--;
}, 1000);
