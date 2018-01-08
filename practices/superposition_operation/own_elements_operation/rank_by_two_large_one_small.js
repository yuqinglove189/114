'use strict';

function rank_by_two_large_one_small(collection) {
    //这里写代码。。。
    let result = [];
    result = increase(collection);
    for (let i = 0; i < result.length; i += 3) {
        let j;
        j = i + 2;
        if (j < result.length) {
            let tem = result[i];
            result[i] = result[i + 1];
            result[i + 1] = result[i + 2];
            result[i + 2] = tem;
        }
    }
    return result;
}
module.exports = rank_by_two_large_one_small;

function increase(collection) {
    let small;
    let locate;
    for (let i = 0; i < collection.length; i++) {
        small = collection[i];
        for (let j = i + 1; j < collection.length; j++) {
            if (collection[j] < small) {
                small = collection[j];
                locate = j;
            }
        }
        if (small !== collection[i]) {
            collection[locate] = collection[i];
            collection[i] = small;
        }
    }
    return collection;
}
module.exports = rank_by_two_large_one_small;