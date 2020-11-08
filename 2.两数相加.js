/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode(0,  null);
    const head = new ListNode(0,  newList);
    let flag = 0;
    
    while(l1!=null||l2!=null){
      let tmp;
      let nextval=null;
      if(l1!=null&&l2!=null){
        tmp = l1.val+l2.val+flag;
        l1 = l1.next;
        l2 = l2.next;
        flag = Math.floor(tmp/10);
        if(l1!=null||l2!=null||flag){
          nextval = new ListNode(0, null);
        }
      } else if(l2!=null){
        tmp = l2.val+flag;
        l2 = l2.next;
        flag = Math.floor(tmp/10);
        if(l2!=null||flag){
          nextval = new ListNode(0, null);
        }
      } else {
        tmp = l1.val+flag;
        l1 = l1.next;
        flag = Math.floor(tmp/10);
        if(l1!=null||flag){
          nextval = new ListNode(0, null);
        }
      }                                                 

      let current = tmp%10;
      newList.val = current;
      newList.next = nextval;
      newList = nextval;
      
    }
    console.log(flag, newList, head.next);
    if(flag!=0){
      newList.val = flag;

    } 
    return head.next;
};
// @lc code=end

