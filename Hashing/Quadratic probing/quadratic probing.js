function hashTable(size){
	this.size = size;
	this.keys = this.initArray(size);
	this.values = this.initArray(size);
	this.limit = 0;
}

hashTable.prototype.put = function(key, value){
	if(this.limit >= this.size) throw 'hash table is full';

	var hashedIndex = this.hash(key),
		sqaureIndex = 1;

	while(this.keys[hashedIndex] != null){
		hashedIndex += Math.pow(sqaureIndex,2);
		sqaureIndex++;
	}
	this.keys[hashedIndex] = key;
	this.values[hashedIndex] = value;
	this.limit;
}

hashTable.prototype.get = function(key){
	var hashedIndex = this.hash(key),
		sqaureIndex = 1;

		while(this.keys[hashedIndex] != key){
			hashedIndex += Math.pow(sqaureIndex, 2);
			hashedIndex = hashedIndex & this.size;
			sqaureIndex++;
		}

		return this.values[hashedIndex];
}