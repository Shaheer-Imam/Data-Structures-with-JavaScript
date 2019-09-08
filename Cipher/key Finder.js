function keyFinder(str){ 
	const wordbank =["I ","You ","We ","They ","He ","She ","It "," the ","The "," of "," is ","Is "," am ","Am "," are ","Are "," have ","Have "," has ","Has "," may ","May "," be ","Be "];
	let inStr = str.toString();
	let outStr = ""; 
	let outStrElement = "";
 	for (let k=0; k<26; k++){
		outStr = caesarCipherEncodeAndDecodeEngine(inStr,k);
		for ( let s=0; s < outStr.length; s++){
			for ( let i=0; i < wordbank.length; i++){
				for ( let w=0; w < wordbank[i].length; w++){
					outStrElement += outStr[ s + w ];
				}
				if (wordbank[i] == outStrElement){
        				return k;
				}
				outStrElement = "";
			}
		}
	}
	return 0;
}

function caesarCipherEncodeAndDecodeEngine(inStr, numShifted){
	let shiftNum = numShifted; 
	let charCode = 0;
	let outStr = "";
	let shftedcharCode = 0;
	let result = 0;
    
	for (let i=0; i<inStr.length; i++){
		charCode = inStr[i].charCodeAt();
		shftedcharCode = charCode + shiftNum;
		result = charCode;
		if ((charCode>=48 && charCode<=57)){
			if (shftedcharCode < 48){
		  		let diff = Math.abs(48-1-shftedcharCode)%10;
				while( diff >= 10){
		  			diff = diff%10;
				}
				document.getElementById("diffID").innerHTML = diff;
				shftedcharCode = 57-diff;
				result = shftedcharCode;
			}
		  	else if (shftedcharCode>=48 && shftedcharCode<=57){
				result = shftedcharCode;
			}
			else if (shftedcharCode > 57){
		  		let diff = Math.abs(57+1-shftedcharCode)%10;
				while( diff >= 10){
		  			diff = diff%10;
				}
				document.getElementById("diffID").innerHTML = diff;
				shftedcharCode = 48+diff;
				result = shftedcharCode;
			}
		}
        else if ((charCode>=65 && charCode<=90)){
		  	if (shftedcharCode <=64 ){
		  		let diff = Math.abs(65-1-shftedcharCode)%26;
				while((diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 90-diff;
				result = shftedcharCode;
			}
		  	else if ( shftedcharCode>=65 && shftedcharCode<=90 ){
				result = shftedcharCode;
			}
			else if (shftedcharCode>90 ){
				let diff = Math.abs(shftedcharCode-1-90)%26;
				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 65+diff;
				result = shftedcharCode;
			}
		}
		else if ((charCode>=97 && charCode<=122)){
		  	if (shftedcharCode<=96){
		  		let diff = Math.abs(97-1-shftedcharCode)%26;
				while((diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 122-diff;
				result = shftedcharCode;
			}
		  	else if ( shftedcharCode>=97 && shftedcharCode<=122 ){
				result = shftedcharCode;
			}
			else if (shftedcharCode>122 ){
				let diff = Math.abs(shftedcharCode-1-122)%26;
				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 97+diff;
				result = shftedcharCode;
			}
		}
		outStr = outStr+String.fromCharCode(parseInt(result));
	}
	return outStr;
}
