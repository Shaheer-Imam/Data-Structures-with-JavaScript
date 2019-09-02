function LinearSearch(array,n){
    for(var i=0;i<array.length;i++){
        if(array[i]==n){
            return ture;
        }
    }
    return false;
}

console.log(LinearSearch([1,2,3,4,5,6,7,8],3));
console.log(LinearSearch([1,2,3,4,5,6,7,8],10));
