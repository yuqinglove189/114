'use strict';
var number_map_to_word_over_26 = function(collection) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = collection.map(item => {
        let res;
        if (item < 27)
            res = letter[item - 1];
        else
            res = letter[parseInt(item / 26) - 1] + letter[item % 26 - 1];
        return res;
    })
    return res;
};

module.exports = number_map_to_word_over_26;