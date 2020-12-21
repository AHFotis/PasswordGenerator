// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to get character length information
function getLength() {
  var length = prompt("Character length of password?");

      if (length < 8) {
        alert("Please choose a number between 8 and 128");
        var length = prompt("Character length of password?");
        return length;
      } else if (length > 128) {
        alert("Please choose a number between 8 and 128");
        var length = prompt("Character length of password?");
        return length;
      } else {
        return length;
      // console.log(length);
  }
}

//Function to confirm lower case
function getLowerCase () {

  var lowerCase = confirm("Include LOWER case characters?");

      if (lowerCase) {
        alert("You have confirmed lower case characters.");
      } else {
        alert("No lower case characters");
      }
      return lowerCase;
      // console.log(lowerCase);
}

//Function to confirm upper case characters
function getUpperCase () {

  var upperCase = confirm("Include UPPER case characters?");

      if (upperCase) {
        alert("You have confirmed upper case characters.");
      } else {
        alert("No upper case characters");
      }
      return upperCase;
      // console.log(upperCase);
}




//Function to begin functions on clicking the button
generateBtn.onclick = function getInfo() {
  getLength();
  getLowerCase();
  getUpperCase();    
};

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
