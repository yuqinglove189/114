'use strict';

function even_to_letter(collection) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = [];
    collection.map(item => {
        if (item % 2 === 0)
            res.push(letter[item - 1]);
    });
    return res;
    //在这里写入代码
}

module.exports = even_to_letter;