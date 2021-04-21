//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

<script>
let b = 200;
let a = 2;
var numPrimos = [];
for (; a < b; a++) {
  if (primo(a)) {
    numPrimos.push(a);
  }
}
console.log(numPrimos);
function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
</script>
