// Add two numbers(topic-Linked List)
// time complexity: O(Math.max(l1,l2));
// space complexity: O(1)

const addTwoNumbers = function (l1, l2) {
    let node1 = l1, node2 = l2;
    let sum = 0;

    while (node1 && node2) {
        sum = node1.val + node2.val;
        if (sum > 9) {
            node2.val = sum % 10;
            if (!node1.next && !node2.next) {
                node2.next = {
                    val: 1,
                    next: null
                }
                return l2;
            }
            else if (!node1.next && node2.next) {
                node2.next.val += 1;
                break;
            }
            else if (node1.next && !node2.next) {
                node1.next.val += 1;
                node2.next = node1.next;
                break;
            }
            else {
                node1.next.val += 1;
                node1 = node1.next;
                node2 = node2.next;
            }
        }
        else {
            node2.val = sum;
            node1 = node1.next;
            if(!node2.next){
                node2.next = node1;
                break;
            }else{
                 node2 = node2.next;
            }
        }
    }

    if (node2) {
        while (node2) {
            if (node2.val > 9 && node2.next) {
                let x = node2.val;
                node2.val = x % 10;
                node2.next.val += 1;
                node2 = node2.next;
            }
            else if (node2.val > 9 && !node2.next) {
                let x = node2.val;
                node2.val = x % 10;
                node2.next = {
                    val: 1,
                    next: null
                }
                return l2;
            }
            else if (node2.val <= 9 && node2.next) {
                node2 = node2.next;
            }
            else if (node2.val <= 9 && !node2.next) {
                return l2;
            }
        }
        
    }
    else {
        return l2;
    }
};

addTwoNumbers(l1,l2)