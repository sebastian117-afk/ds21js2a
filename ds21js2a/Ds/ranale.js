//4. array
//   attach(n)
// -> n random integer
// <- random name added


<script>
      function ran()
{
let l;
    return l=String.fromCharCode((Math.floor(1+ Math.random()*26))+64);
}
let a={namerandom:[]},la;
for (x=0;x<5;x++)
{
    la=ran();
    a.namerandom.push(la);

}
document.write (a.namerandom.sort());
</script>