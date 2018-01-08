'use strict';

function choose_divisible_integer(collection_a, collection_b) {

    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection_a.length; i++) {
        for (let j = 0; j < collection_b.length; j++) {
            if (collection_a[i] % collection_b[j] === 0 && res.indexOf(collection_a[i]) === -1)
                res.push(collection_a[i]);
        }
    }
    return res;
}

module.exports = choose_divisible_integer;