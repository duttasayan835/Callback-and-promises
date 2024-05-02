function manipulateString(string, callfunc) {
  let manipulatedString = string.toUpperCase();
  callfunc(manipulatedString);
}
function callfunc(string) {
  console.log(`The manipulated string is ${string}`);
}

manipulateString("hello world", callfunc);
//OUTPUT:The manipulated string is HELLO WORLD
