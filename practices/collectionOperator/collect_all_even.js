'use strict';

function collect_all_even(collection) {
    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0)
            res.push(collection[i]);
    }
    return res;
}

module.exports = collect_all_even;