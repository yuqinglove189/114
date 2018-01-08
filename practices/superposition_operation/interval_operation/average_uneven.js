'use strict';

function average_uneven(collection) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 1) {
            sum += collection[i];
            count += 1;
        }
    }
    sum = sum / count;
    return sum;
    //在这里写入代码
}

module.exports = average_uneven;