const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p')
let prevGuess = []
let numGuess = 1;
let playGame = true;

if(playGame){
      submit.addEventListener('click',function(e){
            e.preventDefault();
            const guess = parseInt(userInput.value)
            ValidateGuess(guess);
      })
}
function ValidateGuess(guess){
      // check validation for guesses 
      if(isNaN(guess)){
            alert("Please Enter a Valid Message");
      }
      else if(guess < 1){
            alert("Please Enter a Valid Message");
            
      }
      else if(guess > 100){
            alert('Enter the number between 1 to 100');
      }
      else{
            prevGuess.push(guess);
            if(numGuess === 11){
                  displayguess(guess);
                  displayMessage(`Game Over. Random number was ${randomNumber}`);
                  endGame();
            }
            else{
                  displayguess(guess);
                  checkGuess(guess)
            }
      }

}

function checkGuess(guess){
      // check the guess is correct or not 
      // guess are low or high
      if(guess === randomNumber){
            displayMessage(`You Guessed it Right `)
            endGame();
      }
      else if(guess < randomNumber){
            displayMessage(`Number is too Low`)
      }
      else if(guess > randomNumber){
            displayMessage(`Number is too high`)
      }
}

function displayMessage(message){
      // user value empty
      // inner html decrease 
   lowOrHi.innerHTML = `<h2> ${message} <h2>`

}

function displayguess(guess){
   userInput.value = '';
      guessSlot.innerHTML += `${guess  }`
      numGuess++;
      lastresult.innerHTML = `${11 -numGuess}`;
}

function newGame(){

}
function endGame(){

}