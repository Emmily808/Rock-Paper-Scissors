//Create our 3 choices.
let choices = ['Rock', 'Paper', 'Scissors']

// Declare the player choice.
let getPlayerChoice = ()  =>{
    let userChoice = prompt('Rock, paper o scissors?')
    return userChoice
}

//Create a function that returns a random choice from the computer.
let getComputerChoice = () => {
    let randomChoice = choices[Math.floor(Math.random()*3)]
    return randomChoice
}

//Storage the values of the choices in variables.
let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()

//Declare our counters and ties
let playerCounter = 0
let computerCounter = 0
let ties = 0

// Write a function that play a single round.
let playRound = (computerSelection, playerSelection) =>{
    
    //User input: rock
    if( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'ROCK' ) {
        ties++
        return('Hay empate.')
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'ROCK' ) {
        computerCounter++ 
        return('Perdiste.')
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK') {
        playerCounter++
        return('Ganaste.')
        
        //User input: paper
    } else if ( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'PAPER' ) {
        playerCounter++
        return('Ganaste.')
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'PAPER' ) {
        ties++
        return('Hay empate.')
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER') {
        computerCounter++
        return('Perdiste.')
        
        //User input: scissors    
    }else if ( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS' ) {
        computerCounter++
        return('Perdiste.')
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS' ) {
        playerCounter++
        return('Ganaste.')
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'SCISSORS') {
        ties++
        return('Hay empate.')
    }
}

//Repite the round until the first user accomplish 3 wins.
for(let i = 0; i<5; i++){
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    console.log(`La compu eligio: ${computerSelection}`)
    console.log(`Vos elegiste: ${playerSelection}`)
    console.log(playRound(computerSelection, playerSelection))
}

//Show the final winner and the results
console.log(`El puntaje es: Computadora ${computerCounter}  Usuario ${playerCounter}  Empates ${ties}`)
if(computerCounter>playerCounter){
    console.log('Perdiste')
}else if(computerCounter<playerCounter){
    console.log('Ganaste chinchilun!!!')
}else{
    console.log('Hay empate')
}



//






