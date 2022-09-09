//Create our 3 choices.
const choices = ['Rock', 'Paper', 'Scissors']



// Write a function that play a single round.

// Declare the player choice.
const playerChoice = () =>{
    const userChoice = prompt('Elige tu opcion....')
    return userChoice
} 

//Create a function that returns a random choice from the computer.
const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random()*3)]
    return randomChoice
}

const playerSelection = playerChoice()
const computerSelection = getComputerChoice()

const playRound = (computerSelection, playerSelection) =>{
    //User input: rock
    if( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'ROCK' ) {
        return(`Hay empate.`)
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'ROCK' ) {
        return(`Perdiste.`)
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK') {
        return(`Ganaste.`)
   
    //User input: paper
    } else if ( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'PAPER' ) {
        return(`Ganaste.`)
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'PAPER' ) {
        return(`Hay empate.`)
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER') {
        return(`Perdiste.`)
    
    //User input: scissors    
    }else if ( computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS' ) {
        return(`Perdiste.`)
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS' ) {
        return(`Ganaste.`)
    } else if (computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'SCISSORS') {
        return(`Hay empate.`)
}
}
console.log("La compu eligio: "+computerSelection)
console.log("Vos elegiste: "+playerSelection)
console.log(playRound(computerSelection, playerSelection))
