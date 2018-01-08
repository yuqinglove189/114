'use strict';

function spilt_to_zero(number, interval) {
    //在这里写入代码
    let res = [];
    let i = number;
    res.push(i);
    for (; number > 0;) {
        number = number - interval;
        i = parseFloat(number).toFixed(1);
        number = parseFloat(i);
        res.push(number);
    }
    return res;
}

module.exports = spilt_to_zero;