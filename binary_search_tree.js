"use strict";
/* Binary Search Tree, a root node is defined and
 * all nodes with lesser value are stored to the left and
 * nodes with higher values are stored to the right
*/
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryST {
    constructor(nums = []) {
        this.nodes = [];
        if (nums.length > 0) {
            nums.forEach(num => this.insertValue(num));
        }
    }
    insertValue(val, node = this.rootNode) {
        if (node === null)
            return;
        if (this.nodes.length === 0) {
            let newNode = new TreeNode(val, 0);
            this.rootNode = newNode;
            this.nodes.push(newNode);
            this.treeHeight = 0;
            return;
        }
        //Checks direction left (less than node)
        if (val <= node.value) {
            if (node.leftChild === null) {
                let newNode = new TreeNode(val, node.height + 1);
                node.leftChild = newNode;
                this.nodes.push(newNode);
                if (newNode.height > this.treeHeight)
                    this.treeHeight = newNode.height;
                return;
            }
            else {
                this.insertValue(val, node.leftChild);
            }
        }
        else { //Direction right (bigger than node)
            if (node.rightChild === null) {
                let newNode = new TreeNode(val, node.height + 1);
                node.rightChild = newNode;
                this.nodes.push(newNode);
                if (newNode.height > this.treeHeight)
                    this.treeHeight = newNode.height;
                return;
            }
            else {
                this.insertValue(val, node.rightChild);
            }
        }
    }
    removeValue() {
    }
    search(value, node = this.rootNode) {
        let foundValue = false;
        if (value === node.value) {
            foundValue = true;
        }
        else {
            if (value <= node.value && node.leftChild !== null)
                return this.search(value, node.leftChild);
            if (value > node.value && node.rightChild !== null)
                return this.search(value, node.rightChild);
        }
        return foundValue;
    }
}
exports.default = BinaryST;
class TreeNode {
    constructor(val, height) {
        this.value = val;
        this.height = height;
        this.leftChild = null;
        this.rightChild = null;
    }
}
//# sourceMappingURL=binary_search_tree.js.map