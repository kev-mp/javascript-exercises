const removeFromArray = function(list) {
    let spliced = list.slice();
    
    for (let i = 1; i < arguments.length; i++) {
        let index = spliced.indexOf(arguments[i]);
        if (index == -1) continue;
        spliced.splice(index, 1);
    }

    console.log(spliced);
    return spliced;
};

// Do not edit below this line
module.exports = removeFromArray;
