function UndirectedGraph(){
    this.edges = {};
}

UndirectedGraph.prototype.addVertex=function(vertex){
    this.edges[vertex]={};
}

UndirectedGraph.prototype.addEdge=function(vertex1,vertex2,weight){
    if(weight==undefined){
        weight=0;
    }
    this.edges[vertex1][vertex2]=weight;
    this.edges[vertex2][vertex1]=weight;
}

UndirectedGraph.prototype.removeEdge=function(vertex1,vertex2){
    if(this.edges[vertex1] && this.edges[vertex1][vertex2]!=undefined){
        delete this.edges[vertex1][vertex2];
    }
    if(this.edges[vertex2] && this.edges[vertex2][vertex1]!=undefined){
        delete this.edges[vertex2][vertex1];
    }
}
UndirectedGraph.prototype.removeVertex=function(vertex){
    for(var ajdVertex in this.edges[vertex]){
        this.removeEdge(adjVertex,vertex);
    }
    delete this.edges[vertex];
}

var graph1=new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(5);
graph1.addVertex(2);
graph1.addEdge(1,5,1);
graph1.edges;
graph1.addVertex(6);
graph1.addEdge(2,5,8);
graph1.removeVertex(5);
graph1.removeEdge(2,5);