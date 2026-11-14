const palindromes = function (str) {
    const revered = str.split("").reverse().join(""); // Reverse the string by splitting, reversing, and re-joining each char
    return revered === str; // Returns true or false if it is a palindrome
};

console.log(palindromes('racecar')); // true
console.log(palindromes('tacos')); // false

// Do not edit below this line
module.exports = palindromes;
