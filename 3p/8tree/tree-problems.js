class node
{
    constructor(data)
    {
        this.data= data;
        this.left = null;
        this.right = null;
    };
};
class BinarySearch{
    contructor(){
        this.root= null;
    };
    insert(data){
        let node = new node(data);
        if(this.root == null){
            this.root= node;
        } else {
            this.insertnode(this.root, node);
        }
    };
    insertnode(root, newnode){
        if(newnode.dara <root.data){
         if(root.left ==null){
             root.left=newnode;
         };
        }else if(newnode.data > root.data){
            if(root.right == null){
                root.right = newnode; 
            }else {
                this.insertnode(root.right, newnode);
            };
        };
    };
    getRootnode(){
        return this.root;
    };
    //preorder
    preorder(root){
        if(root != null){
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        };
    };
    //inorder
    inorder(root){
        if(root != null){
            
            this.preorder(root.left);
            console.log(root.data);
            this.preorder(root.right);
        };
    };
    //postorder
    postorder(root){
        if(root != null){
            this.preorder(root.left);
            this.preorder(root.right);
            console.log(root.data);
        };
    };
    
};
let BinarySearchtree;
 let bst= new BinarySearchtree();

bst.insert(7);
bst.insert(8);
bst.insert(3);
bst.insert(9);
bst.insert(11);
bst.insert(2);
bst.insert(4);
 let root = bst.getRootnode();
 console.log('preorder');
 bst.preorder(root);
 console.log('<br>');

 console.log('inorder');
 bst.inorder(root);
 console.log('<br>')

 console.log('postorder');
 bst.postorder(root);
 console.log('<br>')