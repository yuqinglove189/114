'use strict';

function hybrid_operation_to_uneven(collection) {
    let tem;
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 1) {
            tem = collection[i] * 3 + 2;
            result.push(tem);
        }
    }
    return result;
    //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;