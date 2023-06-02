// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("Length of password: Pick length between 8 and 128 charactrs", 12);
    if {passwordLength <= 8  && passwordLength >= 128} alert("Password length does not fall in range of character length requirements."); 
    else if {passwordLength}
  var passwordLower = confirm("Would you like to include lowercase?");
  if(passwordLower){
    
    var lowercaseChar = prompt("")
  }
  var passwordUpper = confirm("Would you like to include Uppercase characters?");
  var passwordNum = confirm("Would you like to include Numerical characters?");
  var passwordSpec = confirm("Would you like to include Special Characters? (ie. !@#$)");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
s
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
