const sumAll = function(low, high) {
    if (typeof(low) != "number" || typeof(high) != "number" ||
        low < 0 || high < 0) {
        return "ERROR";
    }

    let bottom = Math.min(low, high);
    let top = Math.max(low, high);

    let sum = 0;
    
    for (let i = bottom; i <= top; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
