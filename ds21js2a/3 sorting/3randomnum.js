//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted

<script>
    function numrandoms()
{
    let n=Math.random()*9;
    return Math.floor(1+n);
}
let d=[];
for(x=0;x<4;x++)
{
    let a=numrandoms();
    d[x]=a;
    
}
document.write(" aleatorios"+" "+d+ "<br>" + "ordenados"+" "+ d.sort());

</script>