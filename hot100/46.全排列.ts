function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  function recur(data: number[], cur: number, target: number): void {
    if (cur === target) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      path.push(data[i]);
      recur(data.slice(0, i).concat(data.slice(i + 1)), cur + 1, target);
      path.pop();
    }
  }
  recur(nums, 0, nums.length);
  return res;
}
