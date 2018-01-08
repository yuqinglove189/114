'use strict';

function calculate_elements_sum(collection, element) {
    //在这里写入代码
    let res;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === element) {
            res = i;
        }
    }
    return res;
}

module.exports = calculate_elements_sum;