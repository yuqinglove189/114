'use strict';
var rank_desc = function(collection) {
    for (let i = 0; i < collection.length; i++) {
        for (let j = i; j < collection.length; j++) {
            if (collection[i] > collection[j]) {
                let t;
                t = collection[i];
                collection[i] = collection[j];
                collection[j] = t;
            }
        }
    }
    return collection;
    return [2, 3, 4, 5, 6];
};

module.exports = rank_desc;