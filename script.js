alert(
  `Welcome! To start the game, we need to touch some of the button choices. Who reachs 3 wins first, will be the winner. Let's play!`
);

// CREATE OUR 3 CHOICES.
let possibleChoices = ["rock", "paper", "scissors"];

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let results = document.getElementById("results");
let userScoreCounter = document.getElementById("userScores");
let computerScoreCounter = document.getElementById("computerScores");
let tieScoreCounter = document.getElementById("ties");

//CREATE A FUNCTION THAT RETURNS THE COMPUTER SELECTION.
let getComputerSelection = () => {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

//DECLARE THE COMPUTER'S SELECTION AND THE USER'S SELECTION.
let playerSelection;

//Add the event listeners to the buttons
rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  getComputerSelection();
  playRound(getComputerSelection(), playerSelection);
});

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  getComputerSelection();
  playRound(getComputerSelection(), playerSelection);
});

scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  getComputerSelection();
  playRound(getComputerSelection(), playerSelection);
});

//Declare our counters and ties

let userPoints = 0;
let computerPoints = 0;
let ties = 0;

// HERE I CREATE THE HTML ELEMENTS FOR THE ACTUAL SCORES
let userResultMessage = document.createElement("p");
let computerResultMessage = document.createElement("p");
let itsATieMessage = document.createElement("p");

// Write a function that play a single round.
let playRound = (computerSelection, playerSelection) => {
  let computerChooseRock = computerSelection === "rock";
  let computerChoosePaper = computerSelection === "paper";
  let computerChooseScissors = computerSelection === "scissors";
  let userChooseRock = playerSelection === "rock";
  let userChoosePaper = playerSelection === "paper";
  let userChooseScissors = playerSelection === "scissors";

  let bothChooseRock = computerChooseRock && userChooseRock;
  let bothChoosePaper = computerChoosePaper && userChoosePaper;
  let bothChooseScissors = computerChooseScissors && userChooseScissors;

  let userWonTheRound =
    (computerChooseScissors && userChooseRock) ||
    (computerChooseRock && userChoosePaper) ||
    (computerChoosePaper && userChooseScissors);

  let computerWonTheRound =
    (computerChoosePaper && userChooseRock) ||
    (computerChooseScissors && userChoosePaper) ||
    (computerChooseRock && userChooseScissors);

  let theresATie = bothChoosePaper || bothChooseRock || bothChooseScissors;

  if (userWonTheRound) {
    userPoints++;
    let userResult = document.createElement("p");
    userResult.textContent = "You win this round!";
    results.appendChild(userResult);
    // SHOWING THE SCORING (NOT FINISHED AT ALL)
    userResultMessage.textContent = `The user have: ${userPoints} wins`;
    userScoreCounter.appendChild(userResultMessage);
    ////////////////////////////////////
  } else if (computerWonTheRound) {
    computerPoints++;
    let computerResult = document.createElement("p");
    computerResult.textContent = "The computer win the round";
    results.appendChild(computerResult);
    // SHOWING THE SCORING (NOT FINISHED AT ALL)
    computerResultMessage.textContent = `The computer has: ${computerPoints} wins`;
    computerScoreCounter.appendChild(computerResultMessage);
    ////////////////////////////////////
  } else if (theresATie) {
    // You can just leave this one as 'else lol'
    ties++;
    let itsATie = document.createElement("p");
    itsATie.textContent = `It's a tie!`;
    results.appendChild(itsATie);
    // SHOWING THE SCORING (NOT FINISHED AT ALL)
    itsATieMessage.textContent = `Ties: ${ties}`;
    tieScoreCounter.appendChild(itsATieMessage);
    ////////////////////////////////////
  }

  if (userPoints == 3) {
    alert("You win the game! Congrats!");
    alert("Press F5 to play again");
  } else if (computerPoints == 3) {
    alert("You loose :( try it again...");
    alert("Press F5 to play again");
  }
};
