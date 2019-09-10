function isLetter(str){
  return str.length === 1 && str.match(/[a-zA-Z]/i);
}

function isUpperCase(character){
  if (character == character.toUpperCase()) {
    return true;
  }
  if (character == character.toLowerCase()){
    return false;
  }
}

function encrypt(message, key){
  let result = "";

  for (let i = 0, j = 0; i < message.length; i++){
    let c = message.charAt(i);
    if (isLetter(c)){
      if(isUpperCase(c)) {
        result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65); // A: 65
      } 
        else {
        result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97); // a: 97
      }
    } 
      else {
      result+=c;
    }
    j = ++j % key.length;
  }
  return result;
}

function decrypt(message, key){
  let result ="";

  for(let i = 0, j = 0; i < message.length; i++){
    let c = message.charAt(i);
    if (isLetter(c)){
      if(isUpperCase(c)) {
        result += String.fromCharCode(90-(25-(c.charCodeAt(0)-key.toUpperCase().charCodeAt(j)))%26);
      } 
        else {
        result += String.fromCharCode(122-(25-(c.charCodeAt(0)-key.toLowerCase().charCodeAt(j)))%26);
      }
    } 
      else {
      result+=c;
    }
    j = ++j % key.length;
  }
  return result;
}

let messageEncrypt = encrypt('Hello World!', 'code');
console.log(messageEncrypt); // "Jhpnr Yrvng!"

let messageDecrypt = decrypt('Jsopq Zstzg!', 'code');
console.log(messageDecrypt); // "Hello World!"
