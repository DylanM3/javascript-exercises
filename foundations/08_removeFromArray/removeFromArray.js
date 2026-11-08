const removeFromArray = function(arr, target) {
    for (let i = (arr.length - 1); i >= 0; i-- ) {
        if (arr[i] === target) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

console.log(removeFromArray([3, 3, 2, 3, 4, 3, 1, 0], 3));

// Do not edit below this line
module.exports = removeFromArray;
