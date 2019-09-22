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

function _isEmpty(obj){
    return Object.keys(obj).length === 0;
}

funtion _extractMin(Q,dist){
    var minimumDistance = Infinity,
        nodeWithMinimumDistance = null;
        for(var node in Q){
            if (dist[node] <= minimumDistance){
                minimumDistance = dist[node];
                nodeWithMinimumDistance = node;
            }
        }
        return nodeWithMinimumDistance;
}

DirectedGraph.prototype.Djikstra = function(source){
    var Q={},dist={};
    for(var vertex in this.edges){
        dist[vertex]=Infinty;
        Q[vertex]=this.edges[vertex];
    }
    dist[source]=0;
    while(!_isEmpty(Q)){
        var u=_extractMin(Q,dist);
        delete Q[u];
        for(var neighbor in this.edges[u]){
            var alt=ddist[u]=this.edges[u][neighbor];
            if(alt<dist[neighbor]){
                dist[neighbor]=alt
            }
        }
    }
    return dist;
}

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A","B",1);
digraph1.addEdge("B","C",1);
digraph1.addEdge("C","A",1);
digraph1.addEdge("A","D",1);
console.log(digraph1);
digraph1.Dijsktra("A");