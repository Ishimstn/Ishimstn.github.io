

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var SpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Asks for User Input
function generateBenchmark() {
    var user_input = parseInt(prompt("How long would you like your password to be?"));

    if (isNaN(user_input) === true) {
        alert("The length of your password must be a number");
        return;
    }
    // Conditional Statement to check whether the length of the password meets the requirments
    if (user_input < 8 || user_input > 128) {
        alert("Your Password must be within the margins of 8 to 128 characters long");
    }
    // Variable to store user input about lowercase characters 
    var containLower = confirm("Click OK to include lowercase letters");

    // Variable to store user input about Uppercase Characters 
    var containUpper = confirm("Click OK to include Uppercase letters");

    // Variable to store user input about Special Characters
    var containSpecial = confirm("Click OK to include Special letters");

    // Variable to store user input about numbers 
    var containNumbers = confirm("Click OK to include numbers");

    // Conditional to check if the user has at least checked to confirm one of the options 

    if (containLower === false && containUpper === false && containSpecial === false && containNumbers === false) {
        alert("You must choose at least one option for your password!!!");
        return;
    }

    // Object to contain the User Input 
    var user_Password = {
        user_length: user_length,
        containLower: containLower,
        containUpper: containUpper,
        containSpecial: containSpecial,
        containNumbers: containNumbers,
    };

    return user_Password;
}


// Function to get a random array element from the options of characters 
function getRandom(arr) {
    var randI = Math.floor(Math.random() * arr.length);
    var randE = arr[randI];
    return randE;
}

// Function to generate password based on the input of the user
function generatePassword() {
    var input = generateBenchmark();

    // Variable to store when concatenation occurs

    var final_Password = [];

    // Variable to store potential character types within the password options

    var potential_Char = [];

    // Variable to store character types within the password options 

    var selected_Char = [];

    // Conditional that adds the array of lowercase characters into the potential character type variable 
    if (input.containLower) {
        potential_Char = potential_Char.concat(lowercase);
        selected_Char.push(getRandom(lowercase));
    }
    // Conditional that adds the array of uppercase characters into the potential character type variable 
    if (input.containUpper) {
        potential_Char = potential_Char.concat(uppercase);
        selected_Char.push(getRandom(uppercase));
    }
    // Conditional that adds the array of special characters into the potential character type variable 
    if (input.containSpecial) {
        potential_Char = potential_Char.concat(SpecialChar);
        selected_Char.push(getRandom(SpecialChar));
    }
    // Conditional that adds the array of numbers characters into the potential character type variable 
    if (input.containNumbers) {
        potential_Char = potential_Char.concat(numbers);
        selected_Char.push(getRandom(numbers));
    }

    // For Loop that iterates over the password length of the user from the User_Password object, which selects random indices from the arrays of possible character types and conatenating those inputs into the final_Password variable
    for (var i = 0; i < input.user_length; i++) {
        var Potential_Char = getRandom(potential_Char);

        final_Password.push(Potential_Char);
    }
    return final_Password.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



