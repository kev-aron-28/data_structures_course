export class LinkedNode{
    data:number | LinkedNode;
    next:LinkedNode | null;
    constructor(data: number, next: any = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    head:any;
    size:number;
    constructor(){
        this.head = null;
        this.size = 0;
    }

    
    preAppend(data:number){
        this.head = new LinkedNode(data, this.head);
        this.size++;
    }

    append(data:number){
        const node:LinkedNode = new LinkedNode(data);
        
        if(this.head == null){
            this.head = node;
            this.size++;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = node;
            this.size++;
        }
    }

    insert(data:number, index:number){
        if(index > this.size){
            throw new Error("Is full");            
        }

        if(this.size == 0){
            this.preAppend(data);
        }
        
        let node:LinkedNode = new LinkedNode(data);
        let counter:number = 0, prev, current = this.head;
        
        while(counter < index){
            prev = current
            current = current.next;
            counter++;
        }

        node.next = current;
        prev.next = node;
        this.size++;
    }

    lookUp(value:number){
        let current = this.head;
        while(current.next){
            if(current.data == value){
                console.log(current);
                return true;
            }

            current = current.next;
        }

        return false;
    }
    
    deleteAt(index:number){
        if(index > this.size){
            throw new Error("Unabled to delete");
        }

        if(index == 0){
            this.head = this.head.next;
            this.size--;
            return 0;
        }

        let counter:number = 0, prev, current = this.head;

        while(counter < index){
            prev = current;
            counter++;
            current = current.next;
        }

        prev.next = current.next;
        this.size--;
    }

    print(){
        let temp = this.head;
        while(temp){
            console.log(temp.data)
            temp = temp.next;
        }
    }
}   


const ll = new LinkedList();
// ll.preAppend(1);


ll.preAppend(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);
ll.append(9);
ll.append(10);
ll.append(11);
ll.append(12);
ll.append(13);
ll.insert(5.5,4);
ll.deleteAt(3);
ll.deleteAt(3)
ll.print();