function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection_a.length; i++) {
        let tem = object_b.value;
        for (var j = 0; j < tem.length; j++) {
            if (collection_a[i] === tem[j])
                res.push(collection_a[i]);
        }
    }
    return res;
}

module.exports = collect_same_elements;