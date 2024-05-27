"use strict";
function isPalindrome(head) {
    const arr = [];
    let j = 0;
    while (head) {
        arr[j++] = head.val;
        head = head.next;
    }
    j--;
    console.log(arr, j);
    let i = 0;
    while (i <= j) {
        if (arr[i] != arr[j])
            return false;
        i++;
        j--;
    }
    return true;
}
class ListNode1 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const node1 = new ListNode1(1);
const node2 = new ListNode1(2);
const node3 = new ListNode1(2);
const node4 = new ListNode1(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
isPalindrome(node1);
