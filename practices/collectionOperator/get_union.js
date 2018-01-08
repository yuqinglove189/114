'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码
    for (let i = 0; i < collection_b.length; i++) {
        let t = 0;
        for (let j = 0; j < collection_a.length; j++) {
            if (collection_a[j] === collection_b[i])
                t = 1;
        }
        if (t === 0)
            collection_a.push(collection_b[i]);
    }
    return collection_a;
}

module.exports = get_union;