class Graph{
    nodes:number;
    adjacentList:object;
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node:number){
        this.adjacentList[node] = [];
        this.nodes++;    
    }

    addEdge(node1:number, node2:number){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

}



const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(2,4);
graph.addEdge(1,5);
console.log(graph);