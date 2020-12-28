import { LinkedNode } from "./LinkedList";
class Stack{
    head:any;
    tail:any;
    size:number = 0;
    constructor(){
        this.head = null; 
        this.tail = null
    }

    push(data:number){
       if(this.head == null){
           this.head = new LinkedNode(data);
           this.tail = this.head;
           this.size++;
       } else {
           let node: LinkedNode = new LinkedNode(data);
           let current = this.head;
           this.head = node;
           this.head.next = current;
           this.size++;
       }
    }

    pop(){
        if(this.head == null){
            throw new Error("No more elements");
        }else if(this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prev = this.head.next;
            this.head = prev;
            this.size--;
        }
    }

    peek(){
        console.log(this.head);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.peek();
console.log(stack);




