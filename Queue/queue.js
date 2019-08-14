function Queue(array){
	this.array = [];
	if(array) this.array = array;
}

Queue.prototype.getBuffer = function(){
	return this.array.slice();
}

Queue.prototype.isEmpty = function(){
	return this.array.length == 0;
}

Queue.prototype.peek = function(){
	return this.array[0];
}

Queue.prototype.enqueue = function(value){
	return this.array.push(value);
}

Queue.prototype.dequeue = function(){
	return this.array.shift();
}

function queueAccessTopNode(queue, n){
	var bufferArray = queue.getBuffer();
	if(n<=0) throw 'error'

	var bufferQueue = new Queue(bufferArray);

	while(--n!==0){
		bufferQueue.dequeue();
	}
	return bufferQueue.dequeue();
}

function queueSearch(queue, element){
	var bufferArray = queue.getBuffer();
	var bufferQueue = new Queue(bufferArray);

	while(!bufferQueue.isEmpty()){
		if(bufferQueue.dequeue()==element){
			return true;
		}
	}
	return false;
}

var queue1 = new Queue();
queue1.enqueue(11);
queue1.enqueue(32);
queue1.enqueue(76);
console.log(queue1);

queue1.dequeue();
console.log(queue1);

