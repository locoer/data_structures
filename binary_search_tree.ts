/* Binary Search Tree, a root node is defined and 
 * all nodes with lesser value are stored to the left and 
 * nodes with higher values are stored to the right 
*/

class BinaryST {
  nodes : TreeNode[];
  rootNode : TreeNode;
  treeHeight : number;

  constructor() {
    this.treeHeight = 0
  }

  insertValue( val : number, node : TreeNode | null = this.rootNode ) : void {
    if( node === null ) return
    
    if( this.nodes.length === 0 ) {
      let newNode : TreeNode = new TreeNode(val, 0)
      this.rootNode = newNode
      this.nodes.push(newNode)
      return
    }

    //Checks direction left (less than node)
    if( val <= node.value ) {
      if( node.leftChild === null ) {
        let newNode : TreeNode = new TreeNode(val, node.height + 1)
        node.leftChild = newNode
        this.nodes.push(newNode)
        return
      } else {
        this.insertValue(val, node.leftChild)
      }
    } else { //Direction right (bigger than node)
        if( node.rightChild === null ) {
          let newNode : TreeNode = new TreeNode(val, node.height + 1)
          node.rightChild = newNode
          this.nodes.push(newNode)
          return
        } else {
          this.insertValue(val, node.rightChild)
        }
    }

  }

  removeValue(){

  }

  search( value : number) {

  }

}

class TreeNode {
  value : number;
  height : number;
  leftChild : TreeNode | null;
  rightChild : TreeNode | null;

  constructor(val:number, height: number){
    this.value = val
    this.height = height
    this.leftChild = null
    this.rightChild = null
  }
}