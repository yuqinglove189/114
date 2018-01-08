'use strict';

function map_to_even(collection) {
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        res.push(collection[i] * 2);
    }
    return res;
}
module.exports = map_to_even;