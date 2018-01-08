function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    let res = [];
    let s = object_b.value;
    for (let i = 0; i < collection_a.length; i++) {
        let tem = collection_a[i].key;
        for (var j = 0; j < s.length; j++) {
            if (tem === s[j])
                res.push(tem);
        }
    }
    return res;
}

module.exports = collect_same_elements;