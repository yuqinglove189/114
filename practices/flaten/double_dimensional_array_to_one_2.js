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
    let result = [];
    for (var l = 0; l < res.length; l++) {
        if (result.indexOf(res[l]) === -1)
            result.push(res[l]);
    }
    return result;


}

module.exports = double_to_one;