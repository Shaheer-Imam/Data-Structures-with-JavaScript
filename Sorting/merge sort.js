function merge(leftA, rightA){
	var results = [], leftInd = 0, rightInd = 0;
	
	while(leftInd < leftA.length && rightInd < rightA.length){
		
		if(leftA[leftInd] < rightA[rightInd]){
			results.push(leftA[leftInd++]);
		}
		
		else{
			results.push(rightA[rightInd++])
		}
	}
	
	var leftRemain = leftA.slice(leftInd),
		rightRemain = rightA.slice(rightInd);

	return results.concat(leftRemain).concat(rightRemain);
}

function mergeSort(array){
	
	if(array.length < 2){
		return array;
	}

	var midpoint = Math.floor((array.length)/2),
	leftArray = array.slice(0, midpoint),
	rightArray = array.slice(midpoint);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

let a = [44,33,11,22,66,55,88,77];
mergeSort(a);
console.log(a);