var inquirer = require("inquirer");



// Letter object constructor takes 2 params:
//    hiddenLetter, holds the value used to compare user's guess
//    bool, boolean based on user's guess existing in the word to guess
var Letter = function (hiddenLetter, letterExist) {
    this.hiddenLetter = hiddenLetter;
    this.letterExist = letterExist;

    //  based on checkGuess method results, will either return: 
    //       ('letter')     OR      ('underscore')
    this.decideDisplay = function () {
        if (this.letterExist) {
            //  true: the letter is reavealed
            console.log(`Reveal: ${this.hiddenLetter}`);
            return this.hiddenLetter;
        }
        else {
            // false: the letter remains "_"
            console.log(`underscore is returned`);
            return ("_");
        }
    };

    this.checkGuess = function (userGuess) {
        console.log(`user guess: ${process.argv[2]}`);
        
        if (userGuess === this.hiddenLetter) {
            this.letterExist = true;
            console.log(`checkGuess said it exists!`);
        }
        else {
            this.letterExist = false;
            console.log(`checkGuess says WRONG LETTER`);
        }
    }
}
// getting userGuess from CLI
var userGuess = process.argv[2]


var firstLetter = new Letter("a", "maybeTrue");
console.log(firstLetter);

var method = process.argv[3];
firstLetter[method]();

var otherMethod = process.argv[4];
firstLetter[otherMethod]();
 