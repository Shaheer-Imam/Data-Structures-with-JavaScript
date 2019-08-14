function selectionSort(items){
	var len = items.length, min;

	for(var i = 0; i < len ; i++){
		min = i;
		for(var j = i+1 ; j< len ; j++){
			if(items[j] < items[min]){
				min = j;
			}
		}
		if(i != min){
			swap(items, i, min);
		}
	}
	return items;
}
function swap(item, value1, value2){
	var temp = item[value1];
	item[value1] = item[value2];
	item[value2] = temp;
}

let a = [6,1,23,4,2,3];
selectionSort(a);
console.log(a);