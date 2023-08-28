const repeatString = function(phrase, times) {
    let res = "";
    if (times < 0) return 'ERROR';

    for (let i = 0; i < times; i++) {
        res += phrase;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
