/* Binary Search Tree, a root node is defined and 
 * all nodes with lesser value are stored to the left and 
 * nodes with higher values are stored to the right 
*/

class BinaryST {
  nodes : number[];
  rootNode : TreeNode;
  treeHeight : number;

  constructor() {
    this.treeHeight = 0
  }

  insertValue() {

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