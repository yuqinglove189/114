'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = [];
    if (number_a > number_b) {
        for (let i = number_a; i >= number_b; i--)
            if (i <= 26)
                res.push(letter[i - 1]);
            else
                res.push(letter[parseInt((i - 1) / 26) - 1] + letter[(i - 1) % 26]);
    } else if (number_a < number_b) {
        for (let i = number_a; i <= number_b; i++)
            if (i <= 26)
                res.push(letter[i - 1]);
            else
                res.push(letter[parseInt((i - 1) / 26) - 1] + letter[(i - 1) % 26]);
    } else {
        if (number_a <= 26)
            res.push(letter[number_a - 1]);
        else
            res.push(letter[parseInt((number_a - 1) / 26) - 1] + letter[(number_a - 1) % 26]);
    }
    return res;
}

module.exports = get_letter_interval_2;