var inquirer = require("inquirer");

function basiccard (front, back) {

    this.front = front;
    this.back = back

};

var question1 = new basiccard("1: What is the only American state to begin with the letter 'P'?", "Pennsylvania");
var question2 = new basiccard("2: What is the capital city of Spain?", "Madrid");
var question3 = new basiccard("3: What is the largest lake completely inside Minnesota?", "Red Lake");


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
