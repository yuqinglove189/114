'use strict';
var even_group_calculate_average = function(collection) {
    let result1 = [];
    let result2 = [];
    let result3 = [];
    let result = [];
    let sum = 0;
    let i = 0;
    for (let i = 1; i < collection.length; i += 2) {
        if (collection[i] % 2 === 0) {
            if (collection[i] < 10)
                result1.push(collection[i]);
            else if (collection[i] < 100)
                result2.push(collection[i]);
            else
                result3.push(collection[i]);
        }
    }
    if (result1.length !== 0) {
        sum = 0;
        for (i = 0; i < result1.length; i++) {
            sum += result1[i];
        }
        sum = sum / result1.length;
        result.push(sum);
    }
    if (result2.length !== 0) {
        sum = 0;
        for (i = 0; i < result2.length; i++) {
            sum += result2[i];
        }
        sum = sum / result2.length;
        result.push(sum);
    }
    if (result3.length !== 0) {
        sum = 0;
        for (i = 0; i < result3.length; i++) {
            sum += result3[i];
        }
        sum = sum / result3.length;
        result.push(sum);
    }
    if (result.length === 0)
        result.push(0);
    return result;
};
module.exports = even_group_calculate_average;