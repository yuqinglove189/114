function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let sub = object_b.value;
    for (let i = 0; i < sub.length; i++) {
        let tem = sub[i];
        for (let j = 0; j < collection_a.length; j++) {
            let key = collection_a[j].key;
            if (key == tem) {
                collection_a[j].count--;
                break;
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;