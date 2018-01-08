'use strict';

function find_last_even(collection) {
    //在这里写入代码
    let res;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            res = i;
        }
    }
    return collection[res];
}

module.exports = find_last_even;