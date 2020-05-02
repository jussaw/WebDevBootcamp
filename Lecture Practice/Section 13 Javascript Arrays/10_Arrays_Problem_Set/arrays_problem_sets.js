function printReverse(list) {
    for(var i = list.length -1; i >= 0; i--) {
        console.log(list[i]);
    }
}

printReverse([3,6,2,5]);

// ****************************************************************************

function isUniform(list) {
    firstElement = list[0];
    for(var i = 1; i < list.length; i++){
        if(list[i] !== firstElement) {
            return false;
        }
    } 
    return true;
}

console.log(isUniform(['a', 'a', 'a']));
console.log(isUniform(['a', 'a', 'b']));


// ****************************************************************************

function sumArray(list) {
    result = 0;
    list.forEach(function(number) {
        result += number;
    });
    return result
}

console.log(sumArray([1,1,1,1,1]));
console.log(sumArray([1,2,3,4,5]));

// ****************************************************************************

function max(list) {
    highest = list[0];
    list.forEach(function(number){
        if(highest < number) {
            highest = number;
        }
    })
    return highest;
};

console.log(max([1,2,3,4,5]));
console.log(max([100,-20,350,41,5]));
