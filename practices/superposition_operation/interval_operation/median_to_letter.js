'use strict';

function getNumber(a, b) {
    return a - b;
}

function median_to_letter(collection) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let median;
    let res;

    collection.sort(getNumber); //排序

    if (collection.length % 2 !== 0) //寻找中位数
        median = Math.ceil(collection[(collection.length - 1) / 2]);
    else
        median = Math.ceil((collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2);

    if (median < 27) //在letter数组里找对应的
        res = letter[median - 1];
    else
        res = letter[parseInt(median / 26) - 1] + letter[median % 26 - 1];

    return res;

    //在这里写入代码
}

module.exports = median_to_letter;