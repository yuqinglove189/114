'use strict';

function collect_min_number(collection) {
    //在这里写入代码
    let min = collection[0];
    for (let i = 1; i < collection.length; i++) {
        if (collection[i] < min)
            min = collection[i];
    }
    return min;
}

module.exports = collect_min_number;