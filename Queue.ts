import { LinkedNode } from "./LinkedList";
class Queues {
    top:any;
    bottom:any;
    length:any;
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    peek() {
      return this.bottom;
    }
  
    enqueue(value:number) {
      const newNode = new LinkedNode(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        this.top.next = newNode;
        this.top = newNode;
      }
  
      this.length++;
  
      return this;
    }
  
    dequeue() {
      if (this.length === 0) {
        return 'No hay elementos a eliminar';
      }
      const newBottom = this.bottom.next;
      this.bottom = newBottom;
      this.length--;
      return this;
    }
  }
const queue = new Queues();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue);



