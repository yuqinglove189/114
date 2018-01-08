'use strict';

function double_to_one(collection) {

    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        if (typeof(collection[i].length) === 'undefined') {
            res.push(collection[i]);
            continue;
        }
        for (let j = 0; j < collection[i].length; j++) {
            res.push(collection[i][j]);
        }
    }
    return res;
}

module.exports = double_to_one;