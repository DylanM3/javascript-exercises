const sumAll = function(startNum, endNum) {
    // Only run if both parameters are above zero
    if(startNum >= 0 && endNum >= 0) {
        let currentSum = 0;
        for(let i = startNum; i < endNum + 1; i++) {currentSum += i;}
        return currentSum;
    }
    return "ERROR"
};

console.log(sumAll(1, 3))

// Do not edit below this line
module.exports = sumAll;
