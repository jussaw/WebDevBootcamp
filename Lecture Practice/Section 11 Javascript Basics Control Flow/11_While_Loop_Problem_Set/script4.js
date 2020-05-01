// Print all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;

while (num <= 50) {
    if(num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++;
}