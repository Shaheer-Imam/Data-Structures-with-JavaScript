function DirectedGraph(){
    this.edges={};
}

DirectedGraph.prototype.addVertex=function(vertex){
    this.edges[vertex]={};
}

DirectedGraph.prototype.addEdge=function(orgVertex,desVertex,weight){
    if(weight===undefined){
        weight=0;
    }
    this.edges[orgVertex][desVertex]=weight;
}

var dirgraph=new DirectedGraph();
dirgraph.addVertex("A");
dirgraph.addVertex("B");
dirgraph.addVertex("C");
dirgraph.addEdge("A","B",1);
dirgraph.addEdge("B","C",2);
