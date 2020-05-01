function isEven(num) {
    num = Number(num);
    return num % 2 === 0;
}

function factorial(num) {
    num = Number(num);
    if (typeof (num) !== "number") {
        return "Not a number";
    }
    if(num >= 1) {
        return num * factorial(num - 1);
    }
    if(num === 0) {
        return 1;
    }
    return 1;
}

function kebabToSnake(str) {
    if(typeof(str) !== "string"){
        return "Not a string";
    }
    return str.replace(/-/g, "_");
}

var isEvenInput = prompt("Enter number to check if is even");
alert(isEven(isEvenInput));

var factorialInput = prompt("Enter number to calculate factorial");
alert(factorial(factorialInput));

var kebabToSnakeInput = prompt("Enter string to change from kebab to snake");
alert(kebabToSnake(kebabToSnakeInput));