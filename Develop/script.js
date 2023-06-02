// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLengthInt;
var passwordLower = false;
var passwordUpper = false;
var passwordNum = false;
var passwordSpec = false;
var charString;
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerical = "0123456789";
const special = "~!@#$%^&*()_";
// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() { 
  passwordLength = prompt("Please enter a pasword length between 8 and 128 characters long.", 12);
  passwordLengthInt= Math.round(passwordLength);

while (passwordLengthInt < 8  || passwordLengthInt > 128 || isNaN(passwordLengthInt)) {
   passwordLength = prompt("Your password did not meet the criteria. Please choose another length of password: Pick a number between 8 and 128 characters.", 12);
   passwordLengthInt=Math.round(passwordLength);
 }
alert("Great! You picked a password length of " + passwordLengthInt + " characters.");
console.log("Your password length is " + passwordLengthInt + " characters.");

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
if (passwordUpper == true){
    alert("Great! You chose to use uppercase in your password.");
  } else {
    alert("Oh no! You chose to not use uppercase in your password.");
}
console.log("Uppercase characters will be used. " + passwordUpper);

passwordNum = confirm("Would you like to include Numerical characters?");
if (passwordNum == true){
  alert("Great! You chose to use Numerical characters in your password.");
} else {
  alert("Oh no! You chose to not use Numerical characters in your password.");
}
console.log("Numerical characters will be used. " + passwordNum);

passwordSpec = confirm("Would you like to include Special characters? (ie. !@#$)");
if (passwordSpec == true){
  alert("Great! You chose to use Special characters in your password.");
} else {
  alert("Oh no! You chose to not use Special characters in your password.");
}
console.log("Special characters will be used. " + passwordSpec);
} while (!passwordLower && !passwordUpper && !passwordNum && !passwordSpec);

if (passwordLower && passwordUpper && passwordNum && passwordSpec) {
  charString = lowercase.concat(uppercase, numerical, special);
  console.log("The String used will be " + charString);
}

if (!passwordLower && passwordUpper && passwordNum && passwordSpec) {
  charString = uppercase.concat(numerical, special);
  console.log("The String used will be " + charString);
} else if (passwordLower && !passwordUpper && passwordNum && passwordSpec) {
  charString = lowercase.concat(numerical, special);
  console.log("The String used will be " + charString);
} else if (passwordLower && passwordUpper && !passwordNum && passwordSpec) {
  charString =lowercase.concat(uppercase, special);
  console.log("The String used will be " + charString);
} else if (passwordLower && passwordUpper && passwordNum && !passwordSpec) {
  charString =lowercase.concat(uppercase, numerical);
  console.log("The String used will be " + charString);
}

if (!passwordLower && !passwordUpper && passwordNum && passwordSpec) {
  charString =numerical.concat(special);
  console.log("The String used will be " + charString);
} else if (!passwordLower && passwordUpper && !passwordNum && passwordSpec) {
  charString =uppercase.concat(special);
  console.log("The String used will be " + charString);
} else if (!passwordLower && passwordUpper && passwordNum && !passwordSpec) {
  charString =uppercase.concat(numerical);
  console.log("The String used will be " + charString);
} else if (passwordLower && !passwordUpper && !passwordNum && passwordSpec){
  charString =lowercase.concat(special);
  console.log("The String used will be " + charString);
} else if (passwordLower && !passwordUpper && passwordNum && !passwordSpec){
  charString =lowercase.concat(numerical);
  console.log("The String used will be " + charString);
} else if (passwordLower && passwordUpper && !passwordNum && !passwordSpec){
  charString =lowercase.concat(uppercase);
  console.log("The String used will be " + charString);
}

if (passwordLower && !passwordUpper && !passwordNum && !passwordSpec) {
  charString =lowercase;
  console.log("The String used will be " + charString);
} else if (!passwordLower && passwordUpper && !passwordNum && !passwordSpec) {
  charString =  uppercase;
  console.log("The String used will be " + charString);
} else if (!passwordLower && !passwordUpper && passwordNum && !passwordSpec) {
  charString = numerical;
  console.log("The String used will be " + charString);
}else if (!passwordLower && !passwordUpper && !passwordNum && passwordSpec) {
  charString = special;
  console.log("The String used will be " + charString);
}
  
  var password = "";
  // var charStringLength = charString.Length;

  for (var i = 0; i < passwordLengthInt; i++) {
    var randomNumber = Math.floor(Math.random() * charString.length);
    // var randomNumber = Math.floor(Math.random() * charStringLength)
    password += charString[randomNumber];
    // String charCategory = charCategories.get(random.nextInt(charCategories.size()));
    // int position = random.nextInt(charCategory.length());
    // password.append(charCategory.charAt(position));

  }
  console.log("Your password is " + password + " and " + password.length + " characters long.");
  return password;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
