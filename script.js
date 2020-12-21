// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to get character length information
function getLength() {

  var length = prompt("Character length of password?");

      while (length < 8 || length > 128) {
        alert("Please choose a number between 8 and 128");
        var length = prompt("Character length of password?");
      }
        return length;
  }


//Function to confirm lower case
function getLowerCase () {

  var lowerCase = confirm("Include LOWER CASE characters?");

      if (lowerCase) {
        alert("You have confirmed LOWER CASE characters.");
      } else {
        alert("No LOWER CASE characters");
      }
      return lowerCase;
}

//Function to confirm upper case characters
function getUpperCase () {

  var upperCase = confirm("Include UPPER CASE characters?");

      if (upperCase) {
        alert("You have confirmed UPPER CASE characters.");
      } else {
        alert("No UPPER CASE characters");
      }
      return upperCase;
}

// Function to confirm numeric characters
function getNumeric () {

  var numericChar = confirm("Include NUMERIC characters?");

      if (numericChar) {
        alert("You have confirmed NUMERIC characters.");
      } else {
        alert("No NUMERIC characters");
      }
      return numericChar;
}

// Function to confirm special characters
function getSpecial () {

  var specialChar = confirm("Include SPECIAL characters?");

      if (specialChar) {
        alert("You have confirmed SPECIAL characters.");
      } else {
        alert("No SPECIAL characters");
      }
      return specialChar;
}


//Function to begin functions on clicking the button
generateBtn.onclick = function getInfo() {
var length = getLength();
var lowerCase = getLowerCase();
var upperCase = getUpperCase();    
var numericChar = getNumeric();
var specialChar = getSpecial();

console.log(length);
console.log(lowerCase);
console.log(upperCase);
console.log(numericChar);
console.log(specialChar);

while (lowerCase === false && upperCase === false && numericChar === false && specialChar === false) {
  alert("Must chose at least one type of character.");
var lowerCase = getLowerCase();
var upperCase = getUpperCase();    
var numericChar = getNumeric();
var specialChar = getSpecial();

console.log(lowerCase);
console.log(upperCase);
console.log(numericChar);
console.log(specialChar);

}
}

//Function to generate password.
function generatePassword (){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
