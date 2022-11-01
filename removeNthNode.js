const removeNthFromEnd = function(head, n) {
    if(!head.next){
        head = null;
        return head ;
    }
    let node = head;
    let count = 1;
    while(node.next){
        node = node.next;
        count++;
    }
    if(count==n){
        node = head;
        head = node.next;
        return head;
    }
    node = head;
    for(let i=1; i<count-n; i++){
        node = node.next;
    }
    
    let nthNode = node.next;
    
    node.next = nthNode.next;
    
    return head;
};