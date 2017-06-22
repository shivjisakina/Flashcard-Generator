var inquirer = require("inquirer");

function clozecard (clozeDeleted, partialText, fullText) {

    this.clozeDeleted = clozeDeleted;
    this.partialText = partialText;
    this.fullText = fullText;

};

var question1 = new clozecard("Pennsylvania", "... is the only American state to begin with the letter 'P'?", "Pennsylvania is the only American state to begin with the letter 'P'?");
var question2 = new clozecard("Madrid", "... is the capital city of Spain?", "Madrid is the capital city of Spain?");
var question3 = new clozecard("Red Lake", "... is the largest lake completely inside Minnesota?", "Red Lake is the largest lake completely inside Minnesota?");
var question4 = new clozecard("blue", "The three primary colors are Red, ..., and Yellow", "The three primary colors are Red, ___, and Yellow");
var question5 = new clozecard("great wall of china", "The ... is the only man-made landmark that you can see from the moon?", "The great wall of china is the only man-made landmark that you can see from the moon?");
var question6 = new clozecard("whale shark", "The ... is the largest fish in the ocean?", "The whale shark is the largest fish in the ocean?");
var question7 = new clozecard("nepal", "... has 8/10 of the highest mountains in the world?", "nepal has 8/10 of the highest mountains in the world?");
var question8 = new clozecard("polish", "The word ... its pronunciation when the first letter is capitalized?", "The word polish its pronunciation when the first letter is capitalized?");
var question9 = new clozecard("steel", "Sound travels fasted through ...", "Sound travels fasted through steel");
var question10 = new clozecard("jupiter", "... is the largest planet in the solar system?", "Jupiter is the largest planet in the solar system?");

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
]).then(function (inquirer) {

    if (inquirer.answer1 === question1.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question1.clozeDeleted))
    }

    if (inquirer.answer2 === question2.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question2.clozeDeleted))
    }

    if (inquirer.answer3 === question3.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question3.clozeDeleted))
    }

    if (inquirer.answer4 === question4.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question4.clozeDeleted))
    }

    if (inquirer.answer5 === question5.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question5.clozeDeleted))
    }

    if (inquirer.answer6 === question6.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question6.clozeDeleted))
    }

    if (inquirer.answer7 === question7.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question7.clozeDeleted))
    }

    if (inquirer.answer8 === question8.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question8.clozeDeleted))
    }

    if (inquirer.answer9 === question9.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question9.clozeDeleted))
    }

    if (inquirer.answer10 === question10.back) {
        console.log("You're right!")
    } else {
        console.log(("Thats incorrect, the correct answer is", question10.clozeDeleted))
    }

});
