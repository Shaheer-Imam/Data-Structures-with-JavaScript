function hashTable(size){
	this.size = size;
	this.keys = this.initArray(size);
	this.values = this.initArray(size);
	this.limit = 0;
}

hashTable.prototype.put = function(key, value){
	if(this.limit >= this.size)
		throw 'hash table is full';

	var hashedIndex = this.hash(key);

	//Linear Probing
	while(this.keys[hashedIndex] != null){
		hashedIndex++;

		hashedIndex = hashedIndex % this.size;
	}

	this.keys[hashedIndex] = key;
	this.values[hashedIndex] = value;
	this.limit++;
}

hashTable.prototype.get = function(key){
	var hashedIndex = this.hash(key);

	while(this.keys[hashedIndex] != key){
		hashedIndex++;

		hashedIndex = hashedIndex % this.size;
	}
	return this.values[hashedIndex];
}

hashTable.prototype.hash = function(key){
	if(!Number.isInteger(key)) throw 'must be integer';
		return key % this.size;
}

hashTable.prototype.initArray = function(size){
	var array = [];
	for(var i=0; i<size ; i++){
		array.push(null);
	}
	return array;
}

var tab = new hashTable(13);
tab.put(47,'Shaheer');
tab.put(44,'Shameer');
tab.put(41,'Noori');
tab.put(57,'Saad');
tab.put(59,'Saim');
tab.put(74,'Mauwia');
tab.put(64,'Qadir');