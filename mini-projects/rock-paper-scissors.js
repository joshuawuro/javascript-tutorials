/**
 * ROCK, PAPER, 0R SCISSORS
 * Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, an which player chooses the more powerful items wins
 * 
 * The possible outcomes are:
 * Rock destroys scissors
 * Scissors cut paper
 * Paper covers rock
 * 
 * Our code will break the game into 4 parts:
 * 1. Get users choice
 * 2. Get the computers choice
 * 3. Compare the two choices and determine the winner
 * 4. Start the program and display the results
 */

// let usersChoice = 'rock';
// let computersChoice = 'paper';

// if (usersChoice === 'rock' && computersChoice === 'scissors' || usersChoice === 'scissors' && computersChoice === 'paper' || usersChoice === 'paper' && computersChoice === 'rock'){
//     console.log('User wins');
// }else if (computersChoice === 'rock' && usersChoice === 'scissors' || computersChoice === 'scissors' && usersChoice === 'paper' || computersChoice === 'paper' && usersChoice === 'rock'){
//     console.last('Computer wins')
// };

function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else{
        return ('Error!, Please enter rock, paper or scissors');
    }
}  

console.log(getUserChoice('paper'));

function getComputerChoice(){
   let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'rock';
    }else if(choice === 1){
        return 'paper';
    } else if(choice === 2){
        return 'scissors';
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'The game was a tie';
    }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Sorry, computer won';
        }else{
            return 'Congratulations, you won!';
        }
    };


    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'Sorry, computer won!';
        }else{
            return 'Congratulations, you won!';
        }
    };

    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Sorry, computer won';
        }else{
            return 'Congratulations, you won!'
        }
    };

};

console.log(determineWinner('rock', 'scissors'));