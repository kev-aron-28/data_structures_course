class node{
    data:number;
    prev:any;
    next:any;
    constructor(data:number){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class doubleLinkedList{
    head:any;
    tail:any;
    length:number = 0;
    constructor(){
        this.head = null;
        this.tail = null;
    }

    preappend(data:number){
        if(this.head == null){
            this.head = new node(data);
            this.tail = this.head;
            this.length++;
        } else {
            let current = new node(data);
            current.next = this.head;
            this.head.prev = current;
            this.head = current;
            this.length++;
        }
    }

    append(data:number){
        if(this.tail == null){
            this.tail = new node(data);
            this.head = this.tail;
            this.length++;
        } else{
            let newNode = new node(data);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }
    }

    insert(data:number, index:number){
        if(index > this.length){
            throw new Error("Unable to insert at index");
        }
        if(index == this.length){
            this.append(data);
            return 0;
        }
        if(index == 0){
            this.preappend(data);
            return 0;
        }
        let newNode = new node(data);
        let counter = 0, current = this.head;
        while(counter < index){
            current = current.next;
            counter++;
        }
        let previ = current.prev;
        previ.next = newNode;
        newNode.prev = previ;
        newNode.next = current;
        current.prev = newNode;
        this.length++;
        
    }

    show(){
        let current = this.head;
        while(current){
            
            console.log(current.data);
            current = current.next;
        }
        return 0;
    }
}

let dbl = new doubleLinkedList();
dbl.append(1);
dbl.append(2);
dbl.append(3);
dbl.append(4);
dbl.insert(1.5, 1)
dbl.insert(2.5, 3)
dbl.insert(4.5, 6)
// dbl.show();
console.log(dbl);