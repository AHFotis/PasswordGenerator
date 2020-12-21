// Assignment Code
var generateBtn = document.querySelector("#generate");

// Functino to get character length information
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
  }
}

//Function to begin functions on clicking the button
generateBtn.onclick = function getInfo() {
  getLength();
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
