// create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number"));

// Check guess
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!");   
}
// Otherwise, check if higher
else if(guess > secretNumber){
    alert("Too high, Guess again!")
}
// Otherwise, check if higher
else{
    alert("Too low, Guess again!");
}