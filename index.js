// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var inquirer = require("inquirer");
var Word = require("./word.js");

//define Word bank of words
var wordBank = ["randomly","constructor","character", "function", "number", "letter", 
"movie", "horse", "kitten","returns","new", "string", "with", "people","button","document",
"total", "amount", "sales","basic", "cable", "frog", "television", "channel","pork","bracket"];
var gameCount = 5; // play 5 rounds
var guessLeft = 8;
// var charTyped = [];
var win = 0;
var lose = 0;

// define a function to recurcively keep play the game untill 5 rounds passed
function playGame(){
    //play 5 rounds
    if (gameCount > 0) {
        //random pick one from word bank
        var index = Math.floor(Math.random() * wordBank.length);
        var newWordToGuess = new Word(wordBank[index]);
        // console.log(newWordToGuess);
        function guess() {
            if (guessLeft > 0 ) {  //setting ending condition, player gets 10 chance
                var beforeInput = newWordToGuess.printWord();  // store word guess status before new round guess for line 34 guess count reduce control
                inquirer.prompt({
                    message: "type a letter to guess: ",
                    name: "charTyping",
                }).then(function (input) {
                    newWordToGuess.wordGuess(input.charTyping);
                    var afterInput = newWordToGuess.printWord();
                    if (beforeInput === afterInput ) {  // user input isn't in the letter array, word stay the same before and after
                        guessLeft--;
                        console.log(guessLeft + " Guess Left");
                    }

                    // checking wining or losing condition
                    if (afterInput == newWordToGuess.printTargetWord()) { //winning codition meet quit and start new round
                        win ++;
                        console.log("win :" + win + " lose: " +lose);
                        gameCount--;
                        guessLeft =10; // reset guess count and restart the whole game from picking a random word
                        if(gameCount >0) playGame();
                    }
                    guess();  // call guess function recursively to keep prompt user inpit untill they finish or 10 guess used up
                })

            }
            else {
                //game failed
                lose ++;
                console.log("win :" + win + " lose: " +lose);
                gameCount--;
                guessLeft =10; // reset guess count and restart the whole game from picking a random word
                if(gameCount >0) playGame();
            }

        }
        guess(); 
    }
    else return; // user finished all rounds , game over!
}

playGame();
