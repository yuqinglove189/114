'use strict';

function compute_chain_median(collection) {
    //在这里写入代码
    let number = [];
    let i;
    let j;
    let tem;
    for (i = 0; i < collection.length; i++) {
        let n = collection[i];
        while (i + 1 < collection.length && collection[i + 1] !== '-') {
            i++;
            n += collection[i];
        }
        tem = change(n);
        number.push(tem);
        i += 2;
    }
    //排序
    for (i = 0; i < number.length; i++) {
        let big = number[i];
        let locate = i;
        for (j = i + 1; j < number.length; j++) {
            if (number[j] > big) {
                locate = j;
                big = number[j];
            }
        }
        if (locate !== i) {
            tem = number[i];
            number[i] = big;
            number[locate] = tem;
        }
    }
    //计算中值
    let w = 0;
    let k = number.length - 1;
    for (; w < k; w++, k--) {
        if (w + 1 === k)
            return (number[w] + number[k]) / 2;
    }
    return number[w + 1];

}

function change(n) {
    let i;
    let number = 0;
    for (let k = 0; k < n.length; k++) {
        i = 0;
        while (i != n[k]) {
            i++;
        }
        number = number * 10 + i
    }
    return number;
}

module.exports = compute_chain_median;