//Create our 3 choices.
let possibleChoices = ["rock", "paper", "scissors"];
// You can just write them all in lower case and lowercase user input (or the opposite)

// Declare the player choice.
let getPlayerChoice = () => {
  return prompt("Rock, paper o scissors?");
};

//Create a function that returns a random choice from the computer.
let getComputerChoice = () => {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  // .length would work for every array, you're going to need it in the future
  // Also you can actually just return it, don't need to use extra memory for this :)
};

//Declare our counters and ties
let userPoints = 0;
let computerPoints = 0;
let ties = 0;

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

  let userWonTheRound = (computerChooseScissors && userChooseRock) || (computerChooseRock && userChoosePaper) || (computerChoosePaper && userChooseScissors);

  let computerWonTheRound =
    (computerChoosePaper && userChooseRock) || (computerChooseScissors && userChoosePaper) || (computerChooseRock && userChooseScissors);

  let theresATie = bothChoosePaper || bothChooseRock || bothChooseScissors;

  //   When you have to evaluate a lot of things, break it down into small pieces
  //   And evaluate separately

  if (userWonTheRound) {
    userPoints++;
    return "Ganaste la ronda";
  } else if (computerWonTheRound) {
    computerPoints++;
    return "Perdiste la ronda";
  } else if (theresATie) {
    // You can just leave this one as 'else lol'
    ties++;
    return "Hay empate";
  }
};

let playerSelection;
let computerSelection;

//Repeat the round until the first user accomplish 3 wins.
while (computerPoints < 5 && userPoints < 5) {
  // This way whoever gets to 5 points wins
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(`La compu eligio: ${computerSelection}`);
  console.log(`Vos elegiste: ${playerSelection}`);
  console.log(playRound(computerSelection, playerSelection.toLowerCase()));

  console.log("-------"); //make it easier to read :)
  console.log(`El puntaje es: Computadora ${computerPoints}  Usuario ${userPoints}  Empates ${ties}`);
  console.log("-------");
  
  // You can actually evaluate here
  if (computerPoints === 5) {
    console.log("Perdiste el juego mi rey");
  } else if (userPoints === 5) {
    console.log("Ganaste el juego crack");
  }
}