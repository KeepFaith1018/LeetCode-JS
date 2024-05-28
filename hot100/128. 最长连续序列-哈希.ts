// 先排序
// 开始计算连续最大,更新res
function longestConsecutive(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums.length < 2) return nums.length;
  let res = 0;
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i] - nums[i - 1];
    if (n == 1) {
      max++;
    } else if (n > 1) {
      max = 1;
    }
    res = Math.max(res, max);
  }
  return res;
}
