'use strict';
var single_element = function(collection) {
    let tem = [];
    let result = [];
    let i;
    let j;
    let tag;
    for (i = 1; i < collection.length; i += 2) {
        tem.push(collection[i]);

    }

    for (i = 0; i < tem.length; i++) {
        tag = true;
        for (j = 0; j < tem.length; j++) {
            if (i !== j && tem[i] === tem[j]) {
                tag = false;
                break;
            }

        }
        if (tag === true)
            result.push(tem[i]);
    }
    return result;
};
module.exports = single_element;