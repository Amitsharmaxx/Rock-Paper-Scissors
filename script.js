let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock,paper,scissors
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
//   console.log("DRAW ");
  msg.innerText = "DRAW";
  msg.style.backgroundColor = "white";
  msg.style.color = "black";
  msg.style.padding = "20px";
  msg.style.textAlign = "center";
};

const showWinner = (userWin) => {
  if (userWin) {

    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win !!!";
    msg.style.backgroundColor = "green";
    msg.style.padding = "20px";
    msg.style.textAlign = "center";

  } else {
    // console.log("You Lost");

    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = "You Lost";
    msg.style.backgroundColor = "#C21807";
    msg.style.padding = "20px";
    msg.style.textAlign = "center";
  }
};
const playGame = (userChoice) => {
  console.log("Your choice is =", userChoice);

  // computer choice
  const computerChoice = compChoice();
  console.log("computer choice =", computerChoice);

  //conditions of winning games
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //paper,rock
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
    
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
