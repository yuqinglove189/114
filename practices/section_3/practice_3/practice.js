function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let res = [];
    for (let i = 0; i < collection_a.length; i++) {
        let tag = -1;
        for (let k = 0; k < res.length; k++) {
            if (collection_a[i] == res[k].key) {
                tag = k;
                break;
            }
        }
        if (tag == -1) {
            let tem = {};
            tem.key = collection_a[i];
            tem.count = 1;
            res.push(tem);
        } else {
            res[tag].count = res[tag].count + 1;
        }
    }
    let sub = object_b.value;
    for (let j = 0; j < sub.length; j++) {
        let tem = sub[j];
        for (let w = 0; w < res.length; w++) {
            let key = res[w].key;
            if (key == tem) {
                if (res[w].count >= 3) {
                    let p = res[w].count;
                    p = Math.floor(p / 3);
                    res[w].count -= p;
                }
                break;
            }
        }
    }
    return res;
}

module.exports = create_updated_collection;