var oddEvenList = function(head) {
    
    if(!head || (!head.next) || (!head.next.next)){
        return head;
    }
    
      let odd = head;
      let firstOdd = odd;
      let even = head.next;
      let firstEven = even;
  
      while(true){
         odd.next = even.next;
         even.next = odd.next.next;

         odd = odd.next;
         even = odd.next;

         if(odd.next == null || even.next == null){
              odd.next = firstEven;
              return head;
         }
      }
    
};