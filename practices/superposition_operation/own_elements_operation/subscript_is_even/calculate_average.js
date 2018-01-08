'use strict';
var calculate_average = function(collection) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            sum += collection[i];
            count++;
        }
    }
    sum = sum / count;
    return sum;
};
module.exports = calculate_average;