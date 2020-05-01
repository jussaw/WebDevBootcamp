function doMath() {
    var x = 40;
    console.log(x);
}

// Not in scope since instantiated in function
x = 4;

// ----------------------------------------------------------------------------

y = 99;
function doMoreMath() {
    // Is in scope so this will work
    console.log(y);
}

function doMoreMath2() {
    // This will change y since it is in scope
    y = 100
    console.log(y);
}

// ----------------------------------------------------------------------------

var phrase = "hello there";

function doSomething() {
    var phrase = "Goodbye!";
    console.log(phrase); // Prints "Goodbye!"
}

doSomething();  // Prints "Goodbye!"
console.log(); // Print "hello there"