var findCylle = (head)=>{
    var set = new Set();
    while(head!=null){
        if(set.has(head.val)) return true;
        set.add(head.val);
        head = head.next();
    }
    return false;
}