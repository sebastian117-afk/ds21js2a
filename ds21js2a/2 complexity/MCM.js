//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 


<script>
let num1=prompt();
let num2=prompt(),i=2,mcm=1;
  while(i<num1 || i<num2)
{
    if (num1%i==0 || num2%i==0)
    {
mcm=mcm*i;
    if(num1%i==0)num1=num1/i;
    if(num2%i==0)num2=num2/i;
} 
else i=i+1;
  }

console.log("Multiplo comun"+" " + mcm);
</script>