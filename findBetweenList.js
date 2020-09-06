/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(head==null||head.next===null) return head;
    var i = 0;
    let tmp = new ListNode();
    tmp.next = head;
    let preMain = null;
    while(i<m-1){
        preMain = head;
        head = head.next;
        i++;
    } 
    
    let pre = null;
    let next = null;

    while(i<n && head!=null){
        next = head.next;
        head.next = pre;
        pre = head;
        head=next;
        i++;
        
    }
    if(preMain!=null)
        preMain.next = pre;
    else 
        preMain = pre;
    let formmer = null;
    while(pre){
        formmer = pre;
        pre = pre.next;
    }
    if(formmer!=null)
        formmer.next = head;

    return tmp.next;
};