'use strict';

function sortNumber(a, b) {
    return a - b;
}

function compute_median(collection) {
    let res;
    collection.sort(sortNumber);
    if (collection.length % 2 !== 0)
        res = collection[(collection.length - 1) / 2];
    else
        res = (collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2;

    return res;
}

module.exports = compute_median;