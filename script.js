let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (n1, n2) => {
    return Math.abs(n1 - n2)
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const userDis = getAbsoluteDistance(userGuess, secretTarget)
    const comDis = getAbsoluteDistance(computerGuess, secretTarget)
    if (userDis <= comDis) return true
    else return false
}

const updateScore = str => {
    if (str === 'human') humanScore ++
    else computerScore ++
}

const advanceRound = () => {
    currentRoundNumber ++
}

const alert = x => {
    if (x < 0 || x > 9) console.log('Your number is out of range')
}