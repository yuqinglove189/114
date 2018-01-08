'use strict';

function get_letter_interval(number_a, number_b) {
    //在这里写入代码
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = [];
    if (number_a > number_b)
        for (let i = number_a; i >= number_b; i--)
            res.push(letter[i - 1]);
    else if (number_a < number_b)
        for (var j = number_a; j <= number_b; j++)
            res.push(letter[j - 1]);
    else
        res.push(letter[number_a - 1]);

    return res;
}

module.exports = get_letter_interval;