'use strict';

function one_add_next_multiply_three(collection) {
    let result = [];
    let tem;
    for (let i = 0; i < collection.length - 1; i++) {
        tem = (collection[i] + collection[i + 1]) * 3;
        result.push(tem);
    }
    return result;
}
module.exports = one_add_next_multiply_three;