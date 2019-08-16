function DLLNode(key, data){
	this.key = key;
	this.data = data;
	this.next = null;
	this.prev = null;
}

function LRUCache(capacity){
	this.keys = {};
	this.capacity = capacity;
	this.head = new DLLNode("",null);
	this.tail = new DLLNode("",null);
	this.head.next = this.tail;
	this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function(node){
	var prev = node.prev,
		next = node.next;
		prev.next = next;
		next.prev = prev;
}

LRUCache.prototype.addNode = function(node){
	var realTail = this.tail.prev;
	realTail.next = node;
	this.tail.prev = node;
	node.prev = realTail;
	node.next = this.tail;
}

LRUCache.prototype.get = function(key){
	var node = this.keys[key];
	if(node == undefined){
		return null;
	}
	else{
		this.removeNode(node);
		this.addNode(node);
		return node.data;
	}
}

LRUCache.prototype.set = function(key, value){
	var node = this.keys[key];
	if(node){
		this.removeNode(node);
	}
	var newNode = new DLLNode(key, value);
	this.addNode(newNode);
	this.keys[key] = newNode;
	if(Object.keys(this.keys).length > this.capacity){
		var realHead = this.head.next;
		this.removeNode(realHead);
		delete this.keys[realHead.key];
	}
}

var lru = new LRUCache(5);

lru.set(1,1);
lru.set(2,2);
lru.set(3,3);
lru.set(4,4);
lru.set(5,5);

lru.get(1);
lru.get(2);

lru.set(6,6);
lru.set(7,7);
lru.set(8,8);