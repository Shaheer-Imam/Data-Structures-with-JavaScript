function insertionSort(array){
	
	let len = array.length;
	let value, i, j;

	for(i=0; i<len ; i++){
		value = array[i];

		for(j=i-1; j > -1 && array[j] > value; j--){
			array[j+1] = array[j];
		}
		array[j+1] = value;
	}

	return array;
}

let b = [32,12,55,3,87,2];
insertionSort(b);
console.log(b);