'use strict';

function choose_common_elements(collection_a, collection_b) {
    let res = [];
    for (let i = 0; i < collection_a.length; i++) {
        if (collection_b.indexOf(collection_a[i]) != -1)
            res.push(collection_a[i]);
    }
    return res;
    //在这里写入代码
}

module.exports = choose_common_elements;