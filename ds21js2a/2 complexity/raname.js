//4. random name
//   randomName()
// -> 
// <- one random name
// ie nameXYZ

<script>

function randname()
{
var m=Math.random()*14;
return m=Math.floor(1+m);
}
var name=randname(),v=["JESUS","MARIA","MISAEL","LILIA","KARINA","GERA","CESAR","LUIS","SEBAS","iRVIN",
"JUAN","LUCERO","SARAI","ISAIAS",];
document.write(v[name]+" "+":)");

</script>