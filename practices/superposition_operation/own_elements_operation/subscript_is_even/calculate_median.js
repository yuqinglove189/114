'use strict';
var calculate_median = function(collection) {
    let collectionA = [];
    for (let i = 1; i < collection.length; i += 2) {
        collectionA.push(collection[i]);
    }
    collectionA = desc(collectionA);
    let start = 0;
    let end = collectionA.length - 1;
    for (; start < end; start++, end--) {
        if (start + 1 === end)
            return (collectionA[start] + collectionA[end]) / 2;
    }
    return collectionA[start];
};
module.exports = calculate_median;

function desc(collection) {
    for (let i = 0; i < collection.length; i++) {
        let max = collection[i];
        let locate = i;
        for (let j = i + 1; j < collection.length; j++) {
            if (collection[j] < max) {
                locate = j;
                max = collection[j];
            }
        }
        if (locate !== i) {
            let tem = collection[i];
            collection[i] = max;
            collection[locate] = tem;
        }
    }
    return collection;
};
module.exports = calculate_median;