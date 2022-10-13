
class Stack {
    constructor(){
        this.stack = [];
    }

    push(data){
       this.stack.push(data);
    }

    pop(){
        this.stack.pop();
    }

    isEmpty(){
        if(this.stack.length == 0){
            return true;
        }
        return false;
    }

    insertAtBottom(data){

        if(!this.stack.length){
            this.stack.push(data);
            return;
        }

        let Data = this.stack.pop();
        this.insertAtBottom(data);
        this.stack.push(Data);
        return this.stack;

    }

    reverse() { 

      if(!this.stack.length){
        return;
      }

      let temp = this.stack.pop();
      this.reverse();
      this.insertAtBottom(temp);
      return this.stack;
    }

    sort() {

        

    }
}


let myStack = new Stack();
myStack.push(4)
myStack.push(5)
myStack.push(6)
myStack.push(7)
myStack.push(8)
console.log(myStack.reverse());

