class pila {
    constructor() {
        this.items={};
        this.top=0;
    };
    Push(data){
        this.top++;
        this.items[this.top]= data;
    };
    pop(){
      let deleteData;
      if(this.top){
       deleteData = this.items[this.top];
       delete this.itemes[this.top];
       this.top++;
       return deleteData;
      };
    };
};
const pila = new pila();
pila.push("marcos");
pila.push("maria");
pila.push("carlos");
console.log(pila.pop());

console.log(pila);
//no me funciona :C