// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var openA = [];
var charLength = "";

//Function to get length
function getLength() {

  charLength = prompt("Character length of password (between 8-128)?");
  charLength = parseInt(charLength);

  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("Please choose and input a number between 8 and 128.");
    charLength = prompt("Character length of password (between 8-128)?");
    charLength = parseInt(charLength);
  }

  alert("You have selected " + charLength + " characters.")
  console.log(charLength);
  return charLength;
}

//Function to get booleans
function getTrueFalse() {

  var lowerCase = "";
  var upperCase = "";
  var numericChar = "";
  var specialChar = "";

  //Wnat lower case?
  lowerCase = confirm("Include LOWER CASE characters?");

  if (lowerCase) {
    alert("You have confirmed LOWER CASE characters.");
  } else {
    alert("No LOWER CASE characters");
  }
  //Want uppercase?
  upperCase = confirm("Include UPPER CASE characters?");

  if (upperCase) {
    alert("You have confirmed UPPER CASE characters.");
  } else {
    alert("No UPPER CASE characters");
  }
  //Want numeric?
  numericChar = confirm("Include NUMERIC characters?");

  if (numericChar) {
    alert("You have confirmed NUMERIC characters.");
  } else {
    alert("No NUMERIC characters");
  }

  specialChar = confirm("Include SPECIAL characters?");

  if (specialChar) {
    alert("You have confirmed SPECIAL characters.");
  } else {
    alert("No SPECIAL characters");
  }
  //Boolean while loop
  if (!lowerCase && !upperCase && !numericChar && !specialChar) {
    alert("Must chose at least one type of character. Please answer again.");
    lowerCase = confirm("Include LOWER CASE characters?");
    if (lowerCase) {
      alert("You have confirmed LOWER CASE characters.");
    } else {
      alert("No LOWER CASE characters");
    }
    upperCase = confirm("Include UPPER CASE characters?");
    if (upperCase) {
      alert("You have confirmed UPPER CASE characters.");
    } else {
      alert("No UPPER CASE characters");
    }
    numericChar = confirm("Include NUMERIC characters?");
    if (numericChar) {
      alert("You have confirmed NUMERIC characters.");
    } else {
      alert("No NUMERIC characters");
    }
    specialChar = confirm("Include SPECIAL characters?");
    if (specialChar) {
      alert("You have confirmed SPECIAL characters.");
    } else {
      alert("No SPECIAL characters");
    }

  }
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numericChar);
  console.log(specialChar);

  return [lowerCase, upperCase, numericChar, specialChar];

}
// Function to start process when button is clicked
generateBtn.onclick = function generatePassword() {

  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~"];

  alert("Hello! Let's get started on your password.")

  charLength = getLength();

  var trueFalse = getTrueFalse();
  console.log(trueFalse);

  if (trueFalse[0] === true) {
    openA = openA.concat(lower);
  }
  if (trueFalse[1] === true) {
    openA = openA.concat(upper);
  }
  if (trueFalse[2] === true) {
    openA = openA.concat(number);
  }
  if (trueFalse[3] === true) {
    openA = openA.concat(special);
  }

  console.log(openA);
  return openA;

}

//Function to generate password.
function generatePassword() {


  for (var i = 0; i < charLength; i++) {
    console.log(openA[Math.floor(Math.random() * openA.length)]);
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);