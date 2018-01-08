'use strict';

function collect_last_element(collection) {
    //在这里写入代码
    var i = collection.length;
    var res = collection[i - 1];
    return res;
}

module.exports = collect_last_element;