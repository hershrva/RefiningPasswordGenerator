// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLengthInt
var passwordLower;
var passwordUpper;
var passwordNum;
var passwordSpec;
// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("Please enter a pasword length between 8 and 128 characters long.", 12);
  passwordLengthInt= Math.round(passwordLength);

while (passwordLengthInt < 8  || passwordLengthInt > 128 || isNaN(passwordLengthInt)) {
   passwordLength = prompt("Your password did not meet the criteria. Please choose another length of password: Pick a number between 8 and 128 characters.", 12);
   passwordLengthInt=Math.round(passwordLength);
 }
alert("Great! You picked a password length of " + passwordLengthInt + " characters.");

passwordLower = confirm("Would you like to include lowercase characters in your password?");
if (passwordLower == true){
    alert("Great! You chose to use lowercase in your password.");
  } else {
    alert("Oh no! You chose to not use lowercase in your password.");
}

passwordUpper = confirm("Would you like to include Uppercase characters?");
if (passwordUpper == true){
    alert("Great! You chose to use uppercase in your password.");
  } else {
    alert("Oh no! You chose to not use uppercase in your password.");
}

passwordNum = confirm("Would you like to include Numerical characters?");
if (passwordUpper == true){
  alert("Great! You chose to use Numerical characters in your password.");
} else {
  alert("Oh no! You chose to not use Numerical characters in your password.");
}

passwordSpec = confirm("Would you like to include Special characters? (ie. !@#$)");
if (passwordUpper == true){
  alert("Great! You chose to use Special characters in your password.");
} else {
  alert("Oh no! You chose to not use Special characters in your password.");
}

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
