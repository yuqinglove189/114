'use strict';

function choose_multiples_of_three(collection) {

    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 3 === 0)
            res.push(collection[i]);
    }
    return res;
}

module.exports = choose_multiples_of_three;