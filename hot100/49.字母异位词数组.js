"use strict";
// 不同的字符串排序后的结果相同,所以将排序后的结果作为key,字符串数组充当value
function groupAnagrams(strs) {
    var _a;
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("");
        if (!map.has(key)) {
            map.set(key, []);
        }
        (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.push(strs[i]);
    }
    return [...map.values()];
}
