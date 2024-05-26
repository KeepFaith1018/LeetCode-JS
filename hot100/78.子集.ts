// 回溯解决
// 每次都在都前进一个，树形前进。
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  function dfs(start: number): void {
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
