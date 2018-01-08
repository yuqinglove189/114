'use strict';
var map_to_four_multiples_add_one = function(collection) {
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        res.push(collection[i] * 4 + 1);
    }
    return res;
};

module.exports = map_to_four_multiples_add_one;