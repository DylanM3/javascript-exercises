// Get Average Age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    let currentTotal = 0;
    for(let user of users) {
        currentTotal += user.age;
    }
    return (currentTotal / users.length);
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28