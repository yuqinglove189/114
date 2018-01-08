'use strict';

function hybrid_operation_to_uneven(collection) {
    let sum = 0;
    let tem;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 1) {
            tem = collection[i] * 3 + 5;
            sum += tem;
        }
    }
    return sum;
    //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;