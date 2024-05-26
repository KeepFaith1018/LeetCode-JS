"use strict";
function hammingDistance(x, y) {
    // xor 不同为1，相同为0；
    let str = (x ^ y).toString(2);
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1")
            res++;
    }
    return res;
}
