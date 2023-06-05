// All assignment code located here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLengthInt;
var passwordLower = false;
var passwordUpper = false;
var passwordNum = false;
var passwordSpec = false;
var charString;
var charSets= [];
var password = "";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerical = "0123456789";
const special = "#$%&'()*+,-./:;<=>?@[^_`{|}~";

// This function writes the password to the text area that is produced by the
// generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// This function uses a while loop and the Math.round function to ensure the user picks an
// integer between 8 and 128.  The while loop will have them continue until the entry
// meets the requirements.  A prompt is then used to alert the user of how many characters
// were selected for the password length.
function generatePassword() { 
  passwordLength = prompt("Please enter a pasword length between 8 and 128 characters long.", 12);
  passwordLengthInt= Math.round(passwordLength);

while (passwordLengthInt < 8  || passwordLengthInt > 128 || isNaN(passwordLengthInt)) {
   passwordLength = prompt("Your password did not meet the criteria. Please choose another length of password: Pick a number between 8 and 128 characters.", 12);
   passwordLengthInt=Math.round(passwordLength);
 }
alert("Great! You picked a password length of " + passwordLengthInt + " characters.");
console.log("Your password length is " + passwordLengthInt + " characters.");

// This do while function operates to ensure that at least one of the strings is used in creating
// the password.  An if else function is used to alert after each choice letting the user aware of what they chose. If no choice
// is made it loops them back to the beginning and has them pick at least one.

do {
alert("Please select one of the following to include in your password.")
passwordLower = confirm("Would you like to include lowercase characters in your password?");
if (passwordLower == true){
    alert("Great! You chose to use lowercase in your password.");
  } else {
    alert("Oh no! You chose to not use lowercase in your password.");
}
console.log("Lowercase characters will be used. " + passwordLower);

passwordUpper = confirm("Would you like to include Uppercase characters?");
if (passwordUpper === true){
    alert("Great! You chose to use uppercase in your password.");
  } else {
    alert("Oh no! You chose to not use uppercase in your password.");
}
console.log("Uppercase characters will be used. " + passwordUpper);

passwordNum = confirm("Would you like to include Numerical characters?");
if (passwordNum === true){
  alert("Great! You chose to use Numerical characters in your password.");
} else {
  alert("Oh no! You chose to not use Numerical characters in your password.");
}
console.log("Numerical characters will be used. " + passwordNum);

passwordSpec = confirm("Would you like to include Special characters? (ie. !@#$)");
if (passwordSpec === true){
  alert("Great! You chose to use Special characters in your password.");
} else {
  alert("Oh no! You chose to not use Special characters in your password.");
}
console.log("Special characters will be used. " + passwordSpec);
} while (!passwordLower && !passwordUpper && !passwordNum && !passwordSpec);

// The following if functions operate to add each respected string to the string that will be used
// to pull the random amount of characters for the password. The console log then logs what the string will be.
if (passwordLower) {
  charSets.push(lowercase);
}

if (passwordUpper) {
  charSets.push(uppercase);
}

if (passwordNum) {
  charSets.push(numerical);
}

if (passwordSpec) {
  charSets.push (special);
}

charString = charSets.join("");
console.log("The String used will be " + charString)


// This function builds the password based on the length that was selected, using Math.random and the
// length of the string to determine how many characters will be chosen. 
  for (var i = 0; i < passwordLengthInt; i++) {
    var randomNumber = Math.floor(Math.random() * charString.length);
    password += charString[randomNumber];
  }
  console.log("Your password is " + password + " and " + password.length + " characters long.");
  return password;
}

// Sets an event listener for clicking of the generate button to fire off the writePassword function.
generateBtn.addEventListener("click", writePassword);
