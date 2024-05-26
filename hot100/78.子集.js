"use strict";
// 回溯解决
// 每次都在都前进一个，树形前进。
function subsets(nums) {
    const res = [];
    const path = [];
    function dfs(start) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1);
            path.pop();
        }
    }
    dfs(0);
    return res;
}
