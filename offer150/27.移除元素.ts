/* 思路
  要原地删除与val相同的元素,并返回剩余的元素数.
  可以用双指针,left从头开始遍历,当等于val时,就将right的元素替换.
*/

function removeElement(nums: number[], val: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] == val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }
  return left;
}
