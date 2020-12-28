class array{

    length:number;
    data:any = {};
    limit: number = 0;
    constructor(length: number){
        this.length = length;
    }

    push(data:any){
        if(this.limit >= this.length){
            throw new Error("Array is full");
        }

        this.data[this.limit] = data;
        this.limit++;
    }

    get(index){
        if(index >= this.length){
            throw new Error("Array is full");
        }

        return this.data[index];
    }

    Mypop(){
        delete this.data[this.limit - 1];
        this.limit--;   
        console.log("hola")
    }

    delete(index){
        if(index  >= this.length){
            return 0;
        }
        delete this.data[index-1];
        this.limit--;  
        for (let i = index; i < this.limit - 1; i++) {
            
            this.data[i] = this.data[i + 1];
            
        }
        
        
        
    }
}


let myarr = new array(5);
myarr.push("kevin");
myarr.push("aron");
myarr.push("tapia");
myarr.push("cruz");
myarr.delete(0)
console.log(myarr);