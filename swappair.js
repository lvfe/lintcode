/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null ||head.next == null) return head;
    var dummay = new ListNode();
    var start = dummay;
    dummay.next = head;
    while(dummay.next!=null&&dummay.next.next!=null){
        var n1 = dummay.next;
        var n2 = dummay.next.next;
        n1.next = n2.next;
        n2.next = n1;
        dummay.next = n2;
        dummay = n1;
    }
    return start.next;
};