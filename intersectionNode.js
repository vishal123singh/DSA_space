

var getIntersectionNode = function(headA, headB) {
    
    let countA = 0;
    let node1 = headA;
    
    while(node1){
        countA++;
        node1=node1.next;
    }
    
    let countB = 0;
    let node2 = headB;
    
    while(node2){
        countB++;
        node2=node2.next;
    }
    
    if(countA>=countB){
        let diff = countA-countB;
        node1 = headA;
        for(let i=1; i<=diff; i++){
            node1 = node1.next;
        }
        node2 = headB;
        while(node1 != node2 && node1 != null){
            node1 = node1.next;
            node2 = node2.next;
        }
       
           return node1; 
       }
    else{
        let diff = countB-countA;
        node2 = headB;
        for(let i=1; i<=diff; i++){
            node2 = node2.next;
        }
        node1 = headA;
        while(node1 != node2 && node1 != null){
            node1 = node1.next;
            node2 = node2.next;
        }
       
           return node1; 
    }
    
};
let ans = getIntersectionNode(node1,nodeA);
console.log(ans);