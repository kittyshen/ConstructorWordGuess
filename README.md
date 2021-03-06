# ConstructorWordGuess
UC Berkeley coding assignment 9

### Overview

This homework assignment is **optional**.

In this week's assignment, you will create a Word Guess command-line game using constructor functions.


## Instructions

The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. Your solution should have, at minimum, three files:

* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`

5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

- - -


## Technology used
* Node.js
* javascript

## Key learning points
```javascript
function Letter(char){
    this.char = char;
    this.charGuesssed = false;
    this.hiddenChar = function (){
        if (this.charGuesssed == true){
            return this.char;
        }
        else return " _";
    };
  ...
}
module.exports = Letter;
```

```javascript
var Letter = require("./letter.js");

function Word(string){
    this.arr = []; //initial a array of Letter obj,this need to be added otherwise can't use the push function on next line
    for(var i =0; i<string.length ; i++){
        this.arr.push(new Letter(string[i])); //after create Letter obj with Letter stamp push it into array
    }
    ...

    this.printWord = function (torf){
      var fullWord = [];
      for(var i=0; i<this.arr.length ; i++){
          fullWord += this.arr[i].hiddenChar();
      } 
      if(torf) console.log(fullWord);
      return fullWord;
    };
    this.wordGuess = function (char){
      for(var i=0; i<this.arr.length ; i++){
          this.arr[i].guess(char);
      }
    };
}
```

```javascript
  if (afterInput == newWordToGuess.printTargetWord()) { //winning codition meet quit and start new round
      win ++;
      console.log("win :" + win + " lose: " +lose);
      console.log("Successfully guessed: " + newWordToGuess.printTargetWord());
      gameCount--;
      playGame();
  }
  else {
      guess();  // call guess function recursively to keep prompt user inpit untill they finish or 10 guess used up
      console.log(charTyped);
  }
```

### Author 
[Kitty Shen ](https://github.com/kittyshen)

### [Link to Portfolio Site](https://kittyshen.github.io/Portfolio/)

