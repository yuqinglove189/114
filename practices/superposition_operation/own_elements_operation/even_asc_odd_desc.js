'use strict';
var even_asc_odd_desc = function(collection) {
    let even = [];
    let odd = [];
    let result = [];
    let i;
    for (i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0)
            even.push(collection[i]);
        else
            odd.push(collection[i]);
    }
    even = increase(even);
    odd = decrease(odd);
    for (i = 0; i < even.length; i++)
        result.push(even[i]);
    for (i = 0; i < odd.length; i++)
        result.push(odd[i]);
    return result;
};
module.exports = even_asc_odd_desc;

function increase(collection) {
    let min;
    let locate;
    for (let i = 0; i < collection.length; i++) {
        min = collection[i];
        for (let j = i + 1; j < collection.length; j++) {
            if (collection[j] < min) {
                min = collection[j];
                locate = j;
            }
        }
        if (min !== collection[i]) {
            collection[locate] = collection[i];
            collection[i] = min;
        }
    }
    return collection;
}

function decrease(collection) {
    let max;
    let locate;
    for (let i = 0; i < collection.length; i++) {
        max = collection[i];
        for (let j = i + 1; j < collection.length; j++) {
            if (collection[j] > max) {
                max = collection[j];
                locate = j;
            }
        }
        if (max !== collection[i]) {
            collection[locate] = collection[i];
            collection[i] = max;
        }
    }
    return collection;
};
module.exports = even_asc_odd_desc;