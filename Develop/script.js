// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables

  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~"];




//Function to get length
function getLength() {
  //Get Length
      var charLength = "";

      charLength = prompt("Character length of password (between 8-128)?");
      charLength = parseInt(charLength);
      console.log()
        while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        alert("Please choose a number between 8 and 128.");
        charLength = prompt("Character length of password (between 8-128)?");
        }

          
       console.log(charLength);
      }
      
//Function to get booleans
  function getInfo() {      

  //Wnat lower case?
      var lowerCase = confirm("Include LOWER CASE characters?");

          if (lowerCase) {
            alert("You have confirmed LOWER CASE characters.");
          } else {
            alert("No LOWER CASE characters");
          }
  //Want uppercase?
      var upperCase = confirm("Include UPPER CASE characters?");

          if (upperCase) {
            alert("You have confirmed UPPER CASE characters.");
          } else {
            alert("No UPPER CASE characters");
          }
  //Want numeric?
      var numericChar = confirm("Include NUMERIC characters?");

          if (numericChar) {
            alert("You have confirmed NUMERIC characters.");
          } else {
            alert("No NUMERIC characters");
          }
          
          var specialChar = confirm("Include SPECIAL characters?");

          if (specialChar) {
            alert("You have confirmed SPECIAL characters.");
          } else {
            alert("No SPECIAL characters");
          }
  //Boolean while loop
          while (!lowerCase && !upperCase && !numericChar && !specialChar) {
          alert("Must chose at least one type of character. Please answer again.");
              var lowerCase = confirm("Include LOWER CASE characters?");
                  if (lowerCase) {
                    alert("You have confirmed LOWER CASE characters.");
                  } else {
                    alert("No LOWER CASE characters");
                  }
              var upperCase = confirm("Include UPPER CASE characters?");
                  if (upperCase) {
                    alert("You have confirmed UPPER CASE characters.");
                  } else {
                    alert("No UPPER CASE characters");
                  }
              var numericChar = confirm("Include NUMERIC characters?");
                  if (numericChar) {
                    alert("You have confirmed NUMERIC characters.");
                  } else {
                    alert("No NUMERIC characters");
                  }
              var specialChar = confirm("Include SPECIAL characters?");
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
                   
    }

  generateBtn.onclick = function pushInfo () {
    alert("Hello! Let's get started on your password.")
    charLength = getLength();
    getInfo();  

  
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
