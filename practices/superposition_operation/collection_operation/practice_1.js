'use strict';

function hybrid_operation(collection) {
    let sum = 0;
    let tem;
    for (let i = 0; i < collection.length; i++) {
        tem = collection[i];
        tem = tem * 3 + 2;
        sum += tem;
    }
    return sum;
    //在这里写入代码
}

module.exports = hybrid_operation;