
// Linking app file to get exports
var app = require('./app.js');

// Getting npm inquirer
var inquirer = require("inquirer");

// Using constructors to build new objects based on new questions
var question1 = new app.clozecard("Pennsylvania", "... is the only American state to begin with the letter 'P'?", "Pennsylvania is the only American state to begin with the letter 'P'?");
var question2 = new app.clozecard("Madrid", "... is the capital city of Spain?", "Madrid is the capital city of Spain?");
var question3 = new app.clozecard("Red Lake", "... is the largest lake completely inside Minnesota?", "Red Lake is the largest lake completely inside Minnesota?");
var question4 = new app.clozecard("blue", "The three primary colors are Red, ..., and Yellow", "The three primary colors are Red, ___, and Yellow");
var question5 = new app.clozecard("great wall of china", "The ... is the only man-made landmark that you can see from the moon?", "The great wall of china is the only man-made landmark that you can see from the moon?");
var question6 = new app.clozecard("whale shark", "The ... is the largest fish in the ocean?", "The whale shark is the largest fish in the ocean?");
var question7 = new app.clozecard("nepal", "... has 8/10 of the highest mountains in the world?", "nepal has 8/10 of the highest mountains in the world?");
var question8 = new app.clozecard("polish", "The word ... its pronunciation when the first letter is capitalized?", "The word polish its pronunciation when the first letter is capitalized?");
var question9 = new app.clozecard("steel", "Sound travels fasted through ...", "Sound travels fasted through steel");
var question10 = new app.clozecard("jupiter", "... is the largest planet in the solar system?", "Jupiter is the largest planet in the solar system?");

// Prompting the questions
inquirer.prompt([{
    type: 'input',
    name: "answer1",
    message: question1.partialText
}, {
    type: 'input',
    name: "answer2",
    message: question2.partialText
}, {
    type: 'input',
    name: "answer3",
    message: question3.partialText
}, {
    type: 'input',
    name: "answer4",
    message: question4.partialText
}, {
    type: 'input',
    name: "answer5",
    message: question5.partialText
}, {
    type: 'input',
    name: "answer6",
    message: question6.partialText
}, {
    type: 'input',
    name: "answer7",
    message: question7.partialText
}, {
    type: 'input',
    name: "answer8",
    message: question8.partialText
}, {
    type: 'input',
    name: "answer9",
    message: question9.partialText
}, {
    type: 'input',
    name: "answer10",
    message: question10.partialText
}

// Giving the user the answers and comparing whether theyre right or wrong
]).then(function (inquirer) {

    if (inquirer.answer1 === question1.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question1.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question1.clozeDeleted)
    }

    if (inquirer.answer2 === question2.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question2.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question2.clozeDeleted)
    }

    if (inquirer.answer3 === question3.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question3.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question3.clozeDeleted)
    }

    if (inquirer.answer4 === question4.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question4.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question4.clozeDeleted)
    }

    if (inquirer.answer5 === question5.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question5.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question5.clozeDeleted)
    }

    if (inquirer.answer6 === question6.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question6.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question6.clozeDeleted)
    }

    if (inquirer.answer7 === question7.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question7.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question7.clozeDeleted)
    }

    if (inquirer.answer8 === question8.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question8.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question8.clozeDeleted)
    }

    if (inquirer.answer9 === question9.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question9.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question9.clozeDeleted)
    }

    if (inquirer.answer10 === question10.clozeDeleted) {
        console.log("You're right, the full sentence was " + "'" + question10.fullText + "'")
    } else {
        console.log("That's incorrect, the correct answer is " + question10.clozeDeleted)
    }

});
