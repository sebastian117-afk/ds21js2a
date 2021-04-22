
//2. set
//   attach(n)//wrap the method 'add'
// -> n random integer
// <- 

<script>
function numerosale(){
    let p=1;let u=100;
    let num=Math.random();
    num= p+num*(u-p+1);
  num=Math.floor(num);
    return num;

}

class DS{
    constructor(){
        this.datos=new Array();
            }
    adjuntar(n){
        this.datos.push(n);

    }
    print(){
        document.write(this.datos)
    }
    }
let misDatos=new DS();
for (let i=0;i<10;i++)
    misDatos.adjuntar(numerosale());
misDatos.print();
</script>