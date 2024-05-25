// 1. 合并后排序
// var merge = function (nums1, m, nums2, n) {
//     for (let i = m; i < m + n; i++) {
//         nums1[i] = nums2[i - m];
//     }
//     nums1.sort(function (a, b) {
//         return a - b
//     });
// };

// 2. 双指针+倒序遍历
// 倒序遍历，填入nums1
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, // nums1指针
        j = n - 1 // nums2指针
    let tail = n + m - 1 // nums1尾部数组指针
    while (j >= 0 || i >= 0) {
        if (j < 0) {
            break
        } else if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[tail--] = nums2[j--]
        } else {
            nums1[tail--] = nums1[i--]
        }
    }
};