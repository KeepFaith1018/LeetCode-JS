/* 
    最大子数组和
    从0开始遍历数组
    只要前面的子数组和大于0那么就是对后面的有增益,可以继续记录.
    否则就是没有增益,可以从新开始记录
*/
function maxSubArray(nums: number[]): number {
  let res = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (res >= 0) {
      res += nums[i];
      max = Math.max(res, max);
    } else {
      res = nums[i];
    }
  }
  return max;
}
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
