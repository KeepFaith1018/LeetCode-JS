"use strict";
// 利用哈希set,完成了去重和"类似排序"两种动作
function longestConsecutive1(nums) {
    let res = 0;
    const set = new Set();
    // 加入数据,去重
    for (const num of nums) {
        set.add(num);
    }
    for (const num of nums) {
        // 以此为起点开始判断
        // !set.has(num - 1)在一段中为最小的数
        if (!set.has(num - 1)) {
            let curNum = num;
            let curLength = 1;
            while (set.has(curNum + 1)) {
                curNum++;
                curLength++;
            }
            res = Math.max(res, curLength);
        }
    }
    return res;
}
