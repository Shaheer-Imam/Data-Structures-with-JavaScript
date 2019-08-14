function countSort(array){
	var hash={}, countArr=[];
	for(var i=0;i<array.length;i++){
		if(!hash[array[i]])
		{
			hash[array[i]] = 1;
		}
		else
		{
			hash[array[i]]++;
		}
	}
	for(var key in hash){
		for(var i=0;i<hash[key];i++){
			countArr.push(parseInt(key));
		}
	}
	return countArr;
}

let a = [33,11,55,44,22];
countSort(a);
console.log(a);
