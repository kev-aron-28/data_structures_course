class TreeNode{
    left:any;
    right:any;
    value:any;
    constructor(value:any){
        this.value = value;
    }
}

class Tree{
    root: any | TreeNode;
    constructor(){
        this.root = null;
    }

    insert(data:number){
        const Tn = new TreeNode(data);
        if(this.root == null){
            this.root = Tn;
        } else {
            let current = this.root;
            while(true){
                if(current.value > data){
                    
                    if(current.left != null){
                        current = current.left;
                    } else {
                        current.left = Tn;
                        break;
                    }
                } else if(current.value < data){
                    
                    if(current.right != null){
                        current = current.right;
                    } else {
                        current.right = Tn; 
                        break;
                    }
                } else{
                    break;
                }
            }
        }
    }

    search(value:number){
        let current = this.root,
            found = false;
        while(current){
            if(current.value > value){
                current = current.left;
            } else if(current.value < value){
                current = current.right;
            }else {
                found = true;
                break;
            }
        }
        
        return found ? current : found;
    }
}



const tree = new Tree();
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(4);
tree.insert(10);
tree.insert(1000);
console.log(tree.search(1));
// console.log(tree);