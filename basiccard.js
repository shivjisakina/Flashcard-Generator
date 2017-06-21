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


var inquirer = require("inquirer");

function basiccard (front, back) {

    this.front = front;
    this.back = back

};

var question1 = new basiccard("1: What is the only American state to begin with the letter 'P'?", "Pennsylvania");
var question2 = new basiccard("2: What is the capital city of Spain?", "Madrid");
var question3 = new basiccard("3: What is the largest lake completely inside Minnesota?", "Red Lake");


/*var question4 = new basiccard("4: The three primary colors are Red, ____, and Yellow", "Blue");
var question5 = new basiccard("5: What is the only man-made landmark that you can see from the moon?", "Great Wall of China");
var question6 = new basiccard("6: What is the largest fish in the ocean?", "A Whale Shark");
var question7 = new basiccard("7: What country has 8/10 of the highest mountains in the world?", "Nepal");
var question8 = new basiccard("8: Which common word changes its pronunciation when the first letter is capitalized?", "Polish");
var question9 = new basiccard("9: Does sound travel faster through water or steel?", "Steel");
var question10 = new basiccard("10: What is the largest planet in the solar system?", "Jupiter");*/


inquirer.prompt([{
    type: 'input',
    name: "answer1",
    message: question1.front
}, {
    type: 'input',
    name: "answer2",
    message: question2.front
}, {
    type: 'input',
    name: "answer3",
    message: question3.front
}
]).then(function (inquirer) {

    if (inquirer.answer1 === question1.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect")
    }

    if (inquirer.answer2 === question2.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect")
    }

    if (inquirer.answer3 === question3.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect")
    }
});
