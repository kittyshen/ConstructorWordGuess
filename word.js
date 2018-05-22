
// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter 
//object (the first function defined in Letter.js) that displays the character or an underscore and 
//concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in Letter.js)

var Letter = require("./letter.js");
//define Word constructor
function Word(string){
    this.arr = []; //initial a array of Letter obj,this need to be added otherwise can't use the push function on next line
    for(var i =0; i<string.length ; i++){
        this.arr.push(new Letter(string[i])); //after create Letter obj with Letter stamp push it into array
    }
    this.printTargetWord = function (){
        var fullWord = [];
        for(var i=0; i<this.arr.length ; i++){
            fullWord += this.arr[i].char;
        } 
        // console.log(fullWord);
        return fullWord;
    };
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

// testing Word constructor
// var test = new Word("cheese cake");
// console.log(test);
// console.log("*****************");
// test.printWord();
// console.log("*********after guess********");
// test.woodGuess("e");
// test.printWord();
// test.woodGuess("s");
// test.printWord();
// test.printTargetWord()

module.exports = Word;