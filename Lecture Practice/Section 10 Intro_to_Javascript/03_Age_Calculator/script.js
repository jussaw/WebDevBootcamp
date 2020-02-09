age = prompt("What is your age?");
numberOfLeapYears = (age - (age%4))/4;
answer = (age * 365) + numberOfLeapYears;
alert(age + " years is roughly " + answer + " days");