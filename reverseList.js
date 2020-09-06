var reverseList = function(head) {
    if(head===null) return null;
    if(head.next==null) return head;
    var a = [];
    while(head){
        a.unshift(head.val);
        head = head.next;
    }
    var newhead = new ListNode(a[0]);
    var m = newhead;
   a.shift();
    a.forEach(i=>{
        let tmp = new ListNode(i);
        newhead.next = tmp;
        newhead = newhead.next;
    });
    newhead.next = null;
    return m;

};

var reverseList = function(head) {
    if(head===null) return null;
    if(head.next==null) return head;
    var dummay = null;
    
    while(head){
        var cur = head.next;
        var old = dummay;
        dummay = head;
        dummay.next= old;
       
        head = cur;
    }
    return dummay;

};
var reverseList = function(head) {
    if(head===null) return null;
    var reverse = function(pre, cur){
        if(cur===null) return pre;
        var cuu = cur.next;
        cur.next=  pre;
        return   reverse(cur, cuu);
    }
   
    return reverse(null, head);

}