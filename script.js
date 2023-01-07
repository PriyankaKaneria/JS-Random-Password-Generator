// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passLength = 0;
var allowSpecialChar = false;
var allowNumbers = false;
var allowLowerChar = false;
var allowUpperChar = false;
var allowedCriteriaChars = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passLength = prompt("Length of password:");
  if (passLength < 10 || passLength > 64) {
    alert(
      "Your password length must be at least 10 characters but no more than 64!"
    );

    return false;
  } else {
    if (confirm("Allow lower case characters.")) {
      allowedCriteriaChars += lowerCasedCharacters.join("");
    }
    if (confirm("Allow upper case characters.")) {
      allowedCriteriaChars += upperCasedCharacters.join("");
    }
    if (confirm("Allow numbers.")) {
      allowedCriteriaChars += numericCharacters.join("");
    }
    if (confirm("Allow special characters.")) {
      allowedCriteriaChars += specialCharacters.join("");
    }
    return true;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  console.log(allowedCriteriaChars);
  if (allowedCriteriaChars == "") {
    alert("You need to select at least one criteria!");
    return;
  } else {
    var password = "";
    for (var i = 0; i <= passLength; i++) {

      //Getting random integer number between 1 to length of "allowedCriteriaChars" string
      var randomNumber = Math.floor(Math.random() * allowedCriteriaChars.length);

      //Now getting character at randomNumber position in "allowedCriteriaChars" string
      password += allowedCriteriaChars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }
}

// Function to generate password with user input
function generatePassword() {
  if (getPasswordOptions()) {
    return getRandom(allowedCriteriaChars);
  }
  return "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
