let choice = ['rock', 'paper', 'scissors'];

let rounds = prompt("How many rounds you wanna play?",);
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let wonoutput;
let loseoutput;


function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        computerSelection = computerPlay();
        computerSelection = computerSelection.toLowerCase();
        playerSelection = prompt("Enter your choice:", "");
        playerSelection = playerSelection.toLowerCase();

        wonoutput = `You Won! ${playerSelection} beats ${computerSelection}`;
        loseoutput = `You Lose! ${computerSelection} beats ${playerSelection}`;

        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === wonoutput)
            playerScore++;
        else if (playRound(playerSelection, computerSelection) === loseoutput)
            computerScore++;
    }
    if (playerScore > computerScore)
        console.log("You won the game");
    else if (playerScore < computerScore)
        console.log("You lose the game");
    else
        console.log("Tie. Play Again!");
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper")
        return loseoutput;

    else if (playerSelection === "paper" && computerSelection === "scissors")
        return loseoutput;

    else if (playerSelection === "scissors" && computerSelection === "rock")
        return loseoutput;

    else if (playerSelection === "rock" && computerSelection === "scissors")
        return wonoutput;

    else if (playerSelection === "paper" && computerSelection === "rock")
        return wonoutput;

    else if (playerSelection === "scissors" && computerSelection === "paper")
        return wonoutput;

    else
        return "It's a tie";
}

game(rounds);

