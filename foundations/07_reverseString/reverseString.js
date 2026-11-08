const reverseString = function(str) {
    return str.split("").reverse().join("");
};

let message = "Hello World";
console.log(reverseString(message));

// Do not edit below this line
module.exports = reverseString;
