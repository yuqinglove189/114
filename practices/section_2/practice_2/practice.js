function count_same_elements(collection) {
    //在这里写入代码
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        let number = 0;
        let k = collection[i];
        if (k.length > 1) {
            let k0 = k[0];
            let sub = k.substring(2);
            for (let j = 0; j < sub.length; j++) {
                let a = 0;
                while (a != sub[j])
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
    return result;
}

module.exports = count_same_elements;