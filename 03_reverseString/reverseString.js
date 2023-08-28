const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
