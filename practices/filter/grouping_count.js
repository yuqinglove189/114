'use strict';

function grouping_count(collection) {

    //在这里写入代码
    let result = new Object();
    for (let i = 0; i < collection.length; i++) {
        let s = collection[i].toString();
        let k = result[s];
        if (k === undefined) {
            result[s] = 1;
        } else {
            result[s] = k + 1;
        }
    }
    console.log(result);
    return result;
}

module.exports = grouping_count;