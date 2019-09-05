var dict="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function encodeId(num){
    var base=dict.length;
    var encoded=" ";
    if(num===0){
        return dict[0];
    }
    while(num>0){
        encoded+=dict[(num%base)];
        num=Math.floor(num/base);
    }
    return reverseWord(encoded);
}

function reverseWord(str){
    var reversed="";
    for(var i=str.length-1;i>=0;i--){
        reversed+=str.charAt(i);
    }
    return reversed;
}

function decodeId(id){
    var base=dict.length;
    var decoded=0;
    for(var index=0;index<id.spilt("").length,index++){
        decoded=decoded*base+dict.indexOf(id.charAt(index));
    }
    return decoded;
}

console.log(encodeId(1232424));
console.log("Shaheer");