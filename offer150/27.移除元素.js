"use strict";
function removeElement(nums, val) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] == val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    return left;
}
