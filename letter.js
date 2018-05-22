// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying 
//character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed 
//the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



//define letter constructor
function Letter(char){
    this.char = char;
    this.charGuesssed = false;
    this.hiddenChar = function (){
        if (this.charGuesssed == true){
            return this.char;
        }
        else return " _";
    };
    this.guess = function(char){
        if(char == this.char) {
            this.charGuesssed = true;
        }
    }
}

// testing letter constructor
// var newL = new Letter("a");
// console.log(newL.hiddenChar());
// newL.charGuesssed = true;
// console.log(newL.hiddenChar());


// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

function Word(string){
    this.arr = [];
    for(var i =0; i<string.length ; i++){
        this.arr.push(new Letter(string[i]));
    }
    this.printWord = function (){
        var fullWord = [];
        for(var i=0; i<this.arr.length ; i++){
            fullWord += this.arr[i].char;
        } 
        console.log(fullWord);
    }
    // this.woodGuess = function (char){
        
    // }
}

var test = new Word("horse");
console.log(test);
console.log("*********");
test.printWord();