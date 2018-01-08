'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        if (res.indexOf(collection[i]) === -1)
            res.push(collection[i]);
    }
    return res;
}

module.exports = choose_no_repeat_number;