class HashTable{
    data:Array<any>;
    length:number;
    limit:number = 0;
    
    constructor(length:number){
        this.data = this.initArray(length);
        this.length = length;
    }


    put(key:number, value:string){
        if(this.limit > this.length){
            throw new Error("Hash Is Full");
            
        }
        let hashed = this.hash(key);
        while(this.data[hashed] != null){
            hashed++;
            hashed = hashed % this.length;
        }
        // console.log(hashed);
        this.data[hashed] = [key, value];
        this.limit++;
    }

    get(key:number){
        let hashed = this.hash(key);
        while(this.data[hashed][0] != key){
            hashed++;
            hashed = hashed % this.length;
        }
        // console.log(hashed);
        return this.data[hashed];

    }
    remove(key:number){
        let hashed = this.hash(key);
        while(this.data[hashed][0] != key){
            hashed++;
            hashed = hashed % this.length;
        }
         this.data[hashed] = null;
    }
    hash(key:number){

        return key % this.length;
    }

    initArray(size:number){
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(null);
        }
        return array;
    }
}



const hash = new HashTable(10);
hash.put(1, "kevin");
hash.put(2, "aron");
hash.put(3, "tapia");
hash.put(4, "cruz");
hash.put(5, "adios");
hash.put(20, "te quiero");
hash.put(2000, "pedro");
hash.remove(1);


// console.log(hash.get(5));
console.log(hash);