// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var charLength = "";
var openArray = [];
var characters = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: ["!", "?", "{", "}", "|", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "[", "]", "=", ":", ";", "/", "-", "'"],
};
var getLastArray = [];

//Function to get length
function getLength() {

  var length = prompt("Character length of password (between 8-128)?");
  length = parseInt(length);

  //While loop to make sure user puts in correct information
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Please choose and input a number between 8 and 128.");
    length = prompt("Character length of password (between 8-128)?");
    length = parseInt(length);
  }

  //Validation
  alert("You have selected " + length + " characters.")
  return length;
}

//Function to get open Array values
function getOpenArray() {

  alert("Let's choose your characters! You must choose at least one type.");

  //Want lower case?
  var lowerCase = confirm("Include LOWER CASE characters?");

  if (lowerCase) {
    alert("You have confirmed LOWER CASE characters.");
    openArray.push(characters.lower);
  } else {
    alert("No LOWER CASE characters");
  }

  //Want uppercase?
  var upperCase = confirm("Include UPPER CASE characters?");

  if (upperCase) {
    alert("You have confirmed UPPER CASE characters.");
    openArray.push(characters.upper);
  } else {
    alert("No UPPER CASE characters");
  }

  //Want number?
  var numericChar = confirm("Include NUMERIC characters?");

  if (numericChar) {
    alert("You have confirmed NUMERIC characters.");
    openArray.push(characters.number);
  } else {
    alert("No NUMERIC characters");
  }

  // Want special character?
  var specialChar = confirm("Include SPECIAL characters?");

  if (specialChar) {
    alert("You have confirmed SPECIAL characters.");
    openArray.push(characters.special);
  } else {
    alert("No SPECIAL characters");
  }

  //Boolean while loop
  while (!lowerCase && !upperCase && !numericChar && !specialChar) {
    alert("You must chose at least one type of character. Please answer again.");
    lowerCase = confirm("Include LOWER CASE characters?");
    if (lowerCase) {
      alert("You have confirmed LOWER CASE characters.");
      openArray.push(characters.lower);
    } else {
      alert("No LOWER CASE characters");
    }
    upperCase = confirm("Include UPPER CASE characters?");
    if (upperCase) {
      alert("You have confirmed UPPER CASE characters.");
      openArray.push(characters.upper);
    } else {
      alert("No UPPER CASE characters");
    }
    numericChar = confirm("Include NUMERIC characters?");
    if (numericChar) {
      alert("You have confirmed NUMERIC characters.");
      openArray.push(characters.number);
    } else {
      alert("No NUMERIC characters");
    }
    specialChar = confirm("Include SPECIAL characters?");
    if (specialChar) {
      alert("You have confirmed SPECIAL characters.");
      openArray.push(characters.special);
    } else {
      alert("No SPECIAL characters");
    }

  }

  return openArray;

}

// Function to run previous functions and return usable array
generateBtn.onclick = function runGetters() {

  // Reset in case button is pressed again without refreshing page.
  openArray = [];
  getLastArray = [];

  alert("Hello! Let's get started on your password.")

  charLength = getLength();
  getOpenArray();

  //Pushing chosen arrays to getLastArray variable
  for (var i = 0; i < charLength; i++) {
    if (openArray[0]) {
      getLastArray.push(openArray[0][Math.floor(Math.random() * openArray[0].length)]);
    }
    if (openArray[1]) {
      getLastArray.push(openArray[1][Math.floor(Math.random() * openArray[1].length)]);
    }
    if (openArray[2]) {
      getLastArray.push(openArray[2][Math.floor(Math.random() * openArray[2].length)]);
    }
    if (openArray[3]) {
      getLastArray.push(openArray[3][Math.floor(Math.random() * openArray[3].length)]);
    }
  }

  return getLastArray;

}


//Function to generate password.
function generatePassword() {

  var finalWord = [];

  //Ensure at least one of each character is in password
  for (var i = 0; i < charLength; i++) {
    finalWord.push(getLastArray[i]);
  }
  
  //Randomize for better password security
  finalWord.sort(() => Math.random() - 0.5)

  return finalWord.join("");

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);