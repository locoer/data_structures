/* Binary Search Tree, a root node is defined and 
 * all nodes with lesser value are stored to the left and 
 * nodes with higher values are stored to the right 
*/

class BinaryST {
  nodes : TreeNode[];
  rootNode : TreeNode;
  treeHeight : number;

  constructor(nums : number[] = []) {
    this.nodes = []
    if( nums.length > 0 ) {
      nums.forEach( num => this.insertValue(num) )
    }
  }

  insertValue( val : number, node : TreeNode | null = this.rootNode ) : void {
    if( node === null ) return
    
    if( this.nodes.length === 0 ) { //Inserts Root Node
      let newNode : TreeNode = new TreeNode(val, 0)
      this.rootNode = newNode
      this.nodes.push(newNode)
      this.treeHeight = 0
      return
    }

    //Checks direction left (less than node)
    if( val <= node.value ) {
      if( node.leftChild === null ) {
        let newNode : TreeNode = new TreeNode(val, node.height + 1)
        node.leftChild = newNode
        newNode.parent = node
        this.nodes.push(newNode)
        if( newNode.height > this.treeHeight ) this.treeHeight = newNode.height
        return
      } else {
        this.insertValue(val, node.leftChild)
      }
    } else { //Direction right (bigger than node)
        if( node.rightChild === null ) {
          let newNode : TreeNode = new TreeNode(val, node.height + 1)
          node.rightChild = newNode
          newNode.parent = node
          this.nodes.push(newNode)
          if( newNode.height > this.treeHeight ) this.treeHeight = newNode.height
          return
        } else {
          this.insertValue(val, node.rightChild)
        }
    }

  }

  removeValue( value : number ){
    //search value, if is not in the tree do nothing
    let removeNode = this.search(value)

    if( removeNode === false) return

    //case 1 - TreeNode is a leaf (no children), then delete it
    if( removeNode.leftChild === null && removeNode.rightChild === null ) {
      let parent : TreeNode | null = removeNode.parent
      if( parent !== null ) {
        parent.leftChild?.value === removeNode.value ? parent.leftChild = null : parent.rightChild = null
        return
      }
    }
    let parent = removeNode.parent
    //case 2 - TreeNode only has one child, then swap places with child and delete node.
    if ( removeNode.leftChild !== null && removeNode.rightChild === null ) {
      if( parent !== null ) {
        parent?.leftChild?.value === removeNode.value ? parent.leftChild = removeNode.leftChild : parent.rightChild = removeNode.leftChild
      }
    }
    if ( removeNode.rightChild !== null && removeNode.leftChild === null ) {
      if( parent !== null ) {
        parent?.leftChild?.value === removeNode.value ? parent.leftChild = removeNode.rightChild : parent.rightChild = removeNode.rightChild
        
      }
    }

    //case 3 - TreeNode has two children, then search for "in order succesor", swap places and delet node.
    // "in order succesor" the next leaf node that is bigger than leftChild and smaller than rightChild

    //Search for available leaf values that can be swapped

    //Sets to null the Node Values
    removeNode.leftChild = null
    removeNode.rightChild = null
    removeNode.parent = null

  }

  search( value : number, node : TreeNode = this.rootNode) : TreeNode | false {
    let foundValue : TreeNode | boolean = false
    if( value === node.value ) {
      foundValue = node
    } else {
      if( value <= node.value && node.leftChild !== null ) return this.search(value, node.leftChild)
      if( value > node.value && node.rightChild !== null ) return this.search(value, node.rightChild)
    }

    return foundValue
  }

}

class TreeNode {
  value : number;
  height : number;
  leftChild : TreeNode | null;
  rightChild : TreeNode | null;
  parent : TreeNode | null;

  constructor(val:number, height: number){
    this.value = val
    this.height = height
    this.leftChild = null
    this.rightChild = null
    this.parent = null
  }
}