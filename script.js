// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

const varOne = 24;
const varTwo = 8;

console.log(varOne - varTwo);

// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.

const nameOne = "Bryant";
const nameTwo = "Kobe";

function compareNames(nameOne, nameTwo) {
    if (nameOne.length > nameTwo.length) {
        let nameDiff = nameOne.length - nameTwo.length;
        return console.log(`${nameOne} is longer than ${nameTwo} by ${nameDiff} characters.`);
    }else {
        nameDiff = nameTwo.length - nameOne.length;
        return console.log(`${nameOne} is shorter than ${nameTwo} by ${nameDiff} characters.`);
    }
}

compareNames(nameOne,nameTwo);

//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let userInput = prompt("type in all CAPS or all lowercase");

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
