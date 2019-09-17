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

DirectedGraph.prototype.removeEdge = function(orgVertex,destVertex){
    if(this.edges[orgVertex] && this.edges[orgVertex][destVertex != undefined]){
        delete this.edges[orgVertex][destVertex];
    }
}

DirectedGraph.prototype.removeVertex = function(vertex){
    for(var adjVertex in this.edges[vertex]){
        this.removeEdge(adjVertex,vertex);
    }
    delete this.edges[vertex];
}

var dirgraph=new DirectedGraph();
dirgraph.addVertex("A");
dirgraph.addVertex("B");
dirgraph.addVertex("C");
dirgraph.addEdge("A","B",1);
dirgraph.addEdge("B","C",2);
