var num = 8;
function doMath() {
    num += 1
    if(num %5 ==0) {
        return true;
    }
    else {
        return false;
    }
}
num += 1;
doMath(); // Return true since num = 10

// ----------------------------------------------------------------------------

function hi() {
    var name = "Rusty";
    console.log(name);
}

function bye() {
    console.log(name)
}

hi(); // Prints "Rusty"
bye(); // Prints nothing since 