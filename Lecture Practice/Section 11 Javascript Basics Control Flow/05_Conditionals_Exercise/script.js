var age = 1;

if(age < 0) {
    console.log("Age cannot be negative");
}

if(age == 21) {
    console.log("happy 21st birthday!!")
}

if(age % 2 != 0) {
    console.log("your age is odd!")
}

if (Number.isInteger(Math.sqrt(age))) {
    console.log("perfect square!")
}