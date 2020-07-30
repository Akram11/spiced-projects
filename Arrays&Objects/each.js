function each(list, callBack) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            callBack(list[i], i);
        }
    } else {
        for (var key in list) {
            callBack(list[key], key);
        }
    }
}

each([10, "a thing", true, { s: 16 }, 5], function (val, idx) {
    console.log("The value of " + idx + " is " + val);
});

each({ 1: 9, 2: 3, 3: 7, 4: 6, 5: 1 }, function (val, name) {
    console.log("The value of item " + name + " is " + val);
});
