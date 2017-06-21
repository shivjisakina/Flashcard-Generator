// PSEUDO CODE

// Create a constructor that creates basic flashcards
// aka module.exports = BasicCard;

// Two arguments: front, back
// Create multiple objects, each one with a front and back

// QUESTIONS AND ANSWERS

// 1: What is the only American state to begin with the letter 'P'?
// Pennsylvania.

// 2: What is the capital city of Spain?
// Madrid.

// 3: What is the largest lake completely inside Minnesota?
// Red Lake

// 4: The three primary colors are Red, ____, and Yellow
// Blue

// 5: What is the only man-made landmark that you can see from the moon?
// Great Wall of China

// 6: What is the largest fish in the ocean?
// A whale shark

// 7: What country has 8/10 of the highest mountains in the world?
// Nepal

// 8: Which common word changes its pronunciation when the first letter is capitalized?
// Polish/polish

// 9: Does sound travel faster through water or steel?
// Steel

// 10: What is the largest planet in the solar system?
//Jupiter


var questions = require("./basiccard.js");
var inquirer = require("inquirer");

inquirer.prompt([{
    type: 'input',
    name: "language",
    message: question1.front
}, {

}, {

}
]).then(function (answers) {

});
