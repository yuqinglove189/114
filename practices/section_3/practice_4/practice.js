function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let result = [];
    for (let l = 0; l < collection_a.length; l++) {
        let number = 0;
        let k = collection_a[l];
        if (k.length > 1) {
            let k0 = k[0];
            let sub = k.substring(2);
            for (let i = 0; i < sub.length; i++) {
                let a = 0;
                while (a != sub[i])
                    a++;
                number = number * 10 + a;
            }
        }
        let tag = -1;
        for (let w = 0; w < result.length; w++) {
            let b = result[w];
            if (b.key == k[0])
                tag = w;
        }
        if (tag == -1) {
            let tem = {};
            tem.key = k[0];
            if (k.length > 1)
                tem.count = number;
            else
                tem.count = 1;
            result.push(tem);
        } else {
            if (k.length > 1)
                result[tag].count += number;
            else
                result[tag].count += 1;
        }
    }
    let sub = object_b.value;
    for (let i = 0; i < sub.length; i++) {
        let tem = sub[i];
        for (let j = 0; j < result.length; j++) {
            let key = result[j].key;
            if (key == tem) {
                if (result[j].count >= 3) {
                    let t = result[j].count;
                    t = Math.floor(t / 3);
                    result[j].count -= t;
                }
                break;
            } else
                continue;
        }
    }
    return result;
}

module.exports = create_updated_collection;