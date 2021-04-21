
//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted

<script>
      function letrarand()
{
    let letra;
    return letra=String.fromCharCode((Math.floor(1+ Math.random()*26))+64);
}
var o={nrandom:[]},la;
for (x=0;x<5;x++)
{
    la=letrarand();
    o.nrandom.push(la);

}
document.write(o.nrandom.sort());
</script>