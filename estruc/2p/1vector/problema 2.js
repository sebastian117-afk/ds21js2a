let array=[ 3, 4, 5,6,7,8];
  let number=array.find(elemento => elemento == 5);
console.log("("+number+",", array.indexOf(5)+")");
array.splice(2);
console.log(array);
