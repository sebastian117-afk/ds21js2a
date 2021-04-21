//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

<script>
    function random()
{
    let n=Math.random()*30;
    return Math.floor (1-n);
}
let n=random();
document.write(n);
</script>