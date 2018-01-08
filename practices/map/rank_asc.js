'use strict';
var rank_asc = function(collection) {
    for (let i = 0; i < collection.length; i++) {
        for (let j = i; j < collection.length; j++) {
            if (collection[i] < collection[j]) {
                let t;
                t = collection[i];
                collection[i] = collection[j];
                collection[j] = t;
            }
        }
    }
    return collection;
};

module.exports = rank_asc;