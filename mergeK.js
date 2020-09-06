/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var mergeTwoList = function(l1, l2){
        if(l1==null&&l2==null) return null;
        if(l1==null) return l2;
        if(l2==null) return l1;
        if(l1.val>l2.val){
            l2.next = mergeTwoList(l1, l2.next);
            return l2;
        }else {
            l1.next = mergeTwoList(l1.next, l2);
            return l1;
        }
    }

    var mergeK = (lists, start, end) => {
        if(start>end) return null;
        if(start==end) return lists[end];
        let mid = Math.floor(start+(end - start)/2);
        return mergeTwoList(mergeK(lists, start, mid), mergeK(lists, mid+1, end));
    }
    return mergeK(lists, 0, lists.length-1);
    
};