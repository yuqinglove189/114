function count_same_elements(collection) {
    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection.length; i++) {
        let tag = -1;
        for (let j = 0; j < res.length; j++) {
            if (collection[i] === res[j].key) {
                tag = j;
                break;
            }
        }
        if (tag === -1) {
            let tem = {};
            tem.key = collection[i];
            tem.count = 1;
            res.push(tem);
        } else {
            res[tag].count = res[tag].count + 1;
        }
    }
    return res;
}

module.exports = count_same_elements;