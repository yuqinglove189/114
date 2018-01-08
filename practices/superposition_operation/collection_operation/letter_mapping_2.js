'use strict';

function average_to_letter(collection) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = [];
    let sum;
    let average;
    sum = collection.reduce((number1, number2) => number1 + number2);
    average = Math.ceil(sum / collection.length);
    res = letter[average - 1];
    return res;
    //在这里写入代码
}

module.exports = average_to_letter;