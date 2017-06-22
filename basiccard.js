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

//4: The three primary colors are Red, ____, and Yellow
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


var inquirer = require("inquirer");

function basiccard (front, back) {

    this.front = front;
    this.back = back

};

var question1 = new basiccard("1: What is the only American state to begin with the letter 'P'?", "pennsylvania");
var question2 = new basiccard("2: What is the capital city of Spain?", "madrid");
var question3 = new basiccard("3: What is the largest lake completely inside Minnesota?", "red lake");
var question4 = new basiccard("4: The three primary colors are Red, ____, and Yellow", "blue");
var question5 = new basiccard("5: What is the only man-made landmark that you can see from the moon?", "great wall of china");
var question6 = new basiccard("6: What is the largest fish in the ocean?", "whale shark");
var question7 = new basiccard("7: What country has 8/10 of the highest mountains in the world?", "nepal");
var question8 = new basiccard("8: Which common word changes its pronunciation when the first letter is capitalized?", "polish");
var question9 = new basiccard("9: Does sound travel faster through water or steel?", "steel");
var question10 = new basiccard("10: What is the largest planet in the solar system?", "jupiter");


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
}, {
    type: 'input',
    name: "answer4",
    message: question4.front
}, {
    type: 'input',
    name: "answer5",
    message: question5.front
}, {
    type: 'input',
    name: "answer6",
    message: question6.front
}, {
    type: 'input',
    name: "answer7",
    message: question7.front
}, {
    type: 'input',
    name: "answer8",
    message: question8.front
}, {
    type: 'input',
    name: "answer9",
    message: question9.front
}, {
    type: 'input',
    name: "answer10",
    message: question10.front
}
]).then(function (inquirer) {

    if (inquirer.answer1 === question1.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question1.back + "'")
    }

    if (inquirer.answer2 === question2.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question2.back + "'")
    }

    if (inquirer.answer3 === question3.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question3.back + "'")
    }

    if (inquirer.answer4 === question4.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question4.back + "'")
    }

    if (inquirer.answer5 === question5.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question5.back + "'")
    }

    if (inquirer.answer6 === question6.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question6.back + "'")
    }

    if (inquirer.answer7 === question7.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question7.back + "'")
    }

    if (inquirer.answer8 === question8.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question8.back + "'")
    }

    if (inquirer.answer9 === question9.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question9.back + "'")
    }

    if (inquirer.answer10 === question10.back) {
        console.log("You're right!")
    } else {
        console.log("That's incorrect, the correct answer is " + "'" + question10.back + "'")
    }

});
