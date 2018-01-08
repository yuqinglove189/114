'use strict';
var map_to_three_multiples = function(collections) {
    let res = [];
    for (let i = 0; i < collections.length; i++) {
        res.push(collections[i] * 3);
    }
    return res;
};

module.exports = map_to_three_multiples;