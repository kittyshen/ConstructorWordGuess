// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying 
//character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed 
//the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



//define Letter constructor
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
module.exports = Letter;

// testing letter constructor
// var newL = new Letter("a");
// console.log(newL.hiddenChar());
// newL.charGuesssed = true;
// console.log(newL.hiddenChar());

//having trouble modulize Letter constructor , refering this post then solved https://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor


