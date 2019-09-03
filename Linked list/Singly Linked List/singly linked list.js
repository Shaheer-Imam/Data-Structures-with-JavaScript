function singlyLinkedList(data){
	this.data = data;
	this.next = null;
}

function singlyLinkedList(){
	this.head = null;
	this.size = 0;
}

singlyLinkedList.prototype.isEmpty = function(){
	return this.size == 0;
}

singlyLinkedList.prototype.insert = function(value){
	if(this.head === null){
		this.head = new singlyLinkedList(value);
	}
	else{
		var temp = this.head;
		this.head = new singlyLinkedList(value);
		this.head.next = temp;
	}
	this.size++;
}

singlyLinkedList.prototype.remove = function(value){
	var currentHead = this.head;
	if(currentHead.data == value){
		this.head = currentHead.next;
		this.size--;
	}
	else{
		var prev = currentHead;
		while(currentHead.next){
			if(currentHead.data == value){
				prev.enxt = currentHead.next;
				prev = currentHead;
				currentHead = currentHead.next;
				break;
			}
			prev = currentHead;
			currentHead = currentHead.next;
		}
		if(currentHead.data == value){
			prev.next = null;
		}
		this.size--;
	}
}

singlyLinkedList.prototype.deleteAtHead = function(){
	var toReturn = null;

	if(this.head !== null){
		toReturn = this.head.data;

		if(this.tail === this.head){
			this.head = null;
			this.tail = null;
		}
		else{
			this.head = this.head.next;
			this.head.prev = null;
		}
	}
	this.size--;
	return toReturn;
}

singlyLinkedList.prototype.find = function(value){
	var currentHead = this.head;
	while(currentHead.next){
		if(currentHead.data == value){
			return true;
		}
		currentHead = currentHead.next;
	}
	return false;
}

singlyLinkedList.prototype.display = function(){
	var currentNode = this.head;
	while(!(currentNode == null)){
		console.log(currentNode.data);
		currentNode = currentNode.next;
	}
}

singlyLinkedList.prototype.reverse = function(){
    var node = this.head;
    var prev = null;
    while(node){
        var temp=node.next;
        node.next=prev;
        prev=node;
        if(!temp){
            break;
        }
        node=temp;
    }
    return node;
}


var sll = new singlyLinkedList();
sll.insert(4);
sll.insert(22);
sll.insert(10);
sll.display();
