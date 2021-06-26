class nodo {
    cosntructor (data, next){
        this.data= data;
        this.next= next;
    };
};

class linkedlist {
    constructor(){
        this.head= null;
        this.size= 0;
    };
    add(data){
        const newnodo = new nodo(data, null);
        if(!this.head){
            this.head= newnodo
        } else {
            let value = this.head;
            while(value.next){
                value = value.next;
            };
            value.next = newnodo;
        };
        this.size++
    };
};
linkedlist.add(5);
linkedlist.add(22);
linkedlist.add(777);
console.log(linkedlist);




//problema 2
class nodo {
    cosntructor (data, next){
        this.data= data;
        this.next= next;
    };
};

class linkedlist {
    constructor(){
        this.head= null;
        this.size= 0;
    };
    add(data){
        const newnodo = new nodo(data, null);
        if(!this.head){
            this.head= newnodo
        } else {
            let value = this.head;
            while(value.next){
                value = value.next;
            };
            value.next = newnodo;
        };
        this.size++
    };
    getSize(){
        return this.size;
    };
    print(){
        if(!this.size){
            return null;
        };
        let value= this.value;
         let result= '';
         while(value){
             result+= value.data += '->';
             value= value.next;
         };
           reult+='x';
           return result;
    };
};
linkedlist.add(5);
linkedlist.add(22);
linkedlist.add(777);
console.log(linkedlist);
console.log(getSize());
console.log(linkedlist.print());




//problema 3
class nodo {
    cosntructor (data, next){
        this.data= data;
        this.next= next;
    };
};

class linkedlist {
    constructor(){
        this.head= null;
        this.size= 0;
    };
    add(data){
        const newnodo = new nodo(data, null);
        if(!this.head){
            this.head= newnodo
        } else {
            let value = this.head;
            while(value.next){
                value = value.next;
            };
            value.next = newnodo;
        };
        this.size++
    };
    getSize(){
        return this.size;
    };
    print(){
        if(!this.size){
            return null;
        };
        let value= this.value;
         let result= '';
         while(value){
             result+= value.data += '->';
             value= value.next;
         };
           reult+='x';
           return result;
    };
    removeData(){
        let value = this.head;
        let anterior = null;
        while(value != null){
            if(value.data === data){
                if(!anterior){
                    this.head= value.next;
                } else {
                    anterior.next = value.next;
                };
                this.else--;
                return value.data;
            };
            anterior = value;
            value = value.next;
        };
    };
};
linkedlist.add(5);
linkedlist.add(22);
linkedlist.add(777);
console.log(linkedlist);
linkedlist.removeData(777);
console.log(getSize());
console.log(linkedlist.print());


