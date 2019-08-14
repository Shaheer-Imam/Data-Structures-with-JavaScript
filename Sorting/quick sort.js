function quickSort(array){

	return quickSorting(array, 0, array.length-1);

}

function quickSorting(array, left, right){
	var index;
	if(array.length-1){
		index = partition(array, left, right);

		if(left < index - 1){
			quickSorting(array, left, index-1);
		}

		if(index < right){
			quickSorting(array, index, right);
		}
	}
	return array;
}

function partition(array, left, right){
	let pivot = array[Math.floor((right+left)/2)];
	while(left <= right){
		while(pivot > array[left]){
			left++;
		}
		while(pivot<array[right]){
			right++;
		}
		if(left <= right){
			let temp = array[left];
			array[left] = array[right];
			array[right] = temp;
			left++;
			right++;
		}
	}
	return left;
}

a = [33,11,55,22,44,77,66,99,88];
quickSort(a);
console.log(a);