function count_same_elements(collection) {
    //在这里写入代码
    var res = [];
    for (var t = 0; t < collection.length; t++) {
        var f = collection[t];
        var tag = -1;
        for (var w = 0; w < res.length; w++) {
            if (f[0] == res[w].name) {
                tag = w;
                break;
            }
        }
        if (f.length == 1) {
            if (tag == -1) {
                var tem = {};
                tem.name = f;
                tem.summary = 1;
                res.push(tem);
            } else {
                res[tag].summary++;
            }
        } else {
            if (f[1] == '[') {
                var k0 = f[0];
                var nu = f.substring(2, f.length - 1);
                var number = 0;
                for (var j = 0; j < nu.length; j++) {
                    var b = 0;
                    while (b != nu[j]) {
                        b++;
                    }
                    number = number * 10 + b;
                }
                if (tag == -1) {
                    var tem = {};
                    tem.name = k0;
                    tem.summary = number;
                    res.push(tem);
                } else {
                    res[tag].summary += number;
                }
            } else {
                var k1 = f[0];
                var ta = res.indexOf(k1);
                var num = f.substring(2);
                var number = 0;
                for (var j = 0; j < num.length; j++) {
                    var a = 0;
                    while (a != num[j]) {
                        a++;
                    }
                    number = number * 10 + a;
                }
                if (tag == -1) {
                    var tem = {};
                    tem.name = k1;
                    tem.summary = number;
                    res.push(tem);
                } else {
                    res[tag].summary += number;
                }
            }
        }
    }
    return res;

}

module.exports = count_same_elements;