//user input variable:
var passwordLength;
var includeNumber;
var includeCharacter;
var includeUppercase;
var includeLowercase;
var passwordString;

//start Password variable values;
//special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Numeric characters
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//alphabetical characters - Lowercase
alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//alphabetical characters - Uppercase
alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function generatePassword() {
//Ask for user input
  passwordLength = parseInt(prompt('How many characters would you like your password to be? Choose between 8 and 128'));
//First if statement for user validation
  if (!passwordLength) {
    alert ("This needs a value");
// If user doesn't input a value, exit the function after the prompt
    exit;
  } 
  else if (passwordLength < 8 || passwordLength > 128) {
//validates user input
//start user input prompts
    alert('You must choose between 8 and 128'); 
// If user doesn't input a invalid leghth, exit the function after the prompt   
    exit ;
  }
  else {
  //Continues once user input is validated
    includeNumber = confirm('Will this contain numbers?');
    includeCharacter = confirm("Will this contain special character?");
    includeUppercase = confirm ("Will this contain Uppercase letters?");
    includeLowercase = confirm ("Will this contain Lowercase letters?");
  };

// Else if for 4 negative options
  if (!includeCharacter && !includeUppercase && !includeLowercase && !includeNumber) {
    passwordstring = alert("You must choose a criteria!");
  }
// Fisrt if statement that uses user input prompts to determine passwordstring
// Else if for 4 positive options
  else if (includeCharacter && includeNumber && includeUppercase && includeLowercase) {
    passwordstring = character.concat(number, alphaLowercase, alphaUppercase);
  }
// Else if for 3 positive options
  else if (includeCharacter && includeNumber && includeUppercase) {
     passwordstring = character.concat(number, alphaUppercase);
  }
  else if (includeCharacter && includeNumber && includeLowercase) {
    passwordstring = character.concat(number, alphaUppercase);
  }
  else if (includeCharacter && includeLowercase && includeUppercase) {
    passwordstring = character.concat(alphaLowercase, alphaUppercase);
  }
  else if (includeNumber && includeLowercase && includeUppercase) {
    passwordstring = character.concat(alphaLowercase, alphaUppercase);
  }
// Else if for 2 options
  else if (includeCharacter && includeNumber) {
    passwordstring = character.concat(number);
  }
  else if (includeCharacter && includeLowercase) {
    passwordstring = character.concat(alphaLowercase);
  }
  else if (includeCharacter && includeUppercase) {
    passwordstring = character.concat(alphaUppercase);
  }
  else if (includeLowercase && includeNumber) {
    passwordstring = alphaLowercase.concat(number);
  }
  else if (includeLowercase && includeUppercase) {
    passwordstring =alphaLowercase.concat(alphaUppercase);
  }
  else if (includeNumber && includeUppercase) {
    passwordstring =number.concat(alphaUppercase);
  }
//Else if for 1 posistive option 
  else if (includeCharacter) {
    passwordstring = character;
  }
  else if (includeNumber) {
    passwordstring = number;
  }
  else if (includeLowercase) {
    passwordstring = alphaLowercase;
  }
  else if (includeUppercase) {
    passwordstring = alphaUppercase;
  };

//password variable is an array placeholder for user generated amount of length
  var password = [];
// Start random selection variables:
// Random selection for all variables
  for (var i = 0; i < passwordLength; i++) {
    var pickpasswordstring = passwordstring [Math.floor(Math.random() * passwordstring.length)];
    password.push(pickpasswordstring);
  }

//This joins the password array and coverts it to a string
  var ps = password.join ("");
  return ps;
  }

// This displays password in the text box
var generateBtn = document.querySelector("#generate");

generateBtn .addEventListener("click", function () {
  ps = generatePassword();
  document .getElementById("password") .placeholder = ps;
});