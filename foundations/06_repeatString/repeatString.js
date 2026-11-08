const repeatString = function(str, count) {
    for (let i = 0; i < count; i++) {console.log(str);}
};

let message = "Future23"
let messageTimes = 23
repeatString("Hello, Dylan", 4)
console.log() // Styling: new line
repeatString(message, messageTimes)

// Do not edit below this line
module.exports = repeatString;
