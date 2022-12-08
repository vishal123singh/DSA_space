class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(root = null) {
        this.root = root;
    }

    insertNode(val) {
        let node = new Node(val);
        if (this.root == null) {
            this.root = node;
        }
        else {
            this.addNode(this.root,node)
        }
    }

    addNode(root, node) {
        if (node.val < root.val && root.left == null) {
            root.left = node;
            return;
        }
        else if (node.val >= root.val && root.right == null) {
            root.right = node;
            return;
        }
        else if (node.val < root.val) {
            return this.addNode(root.left, node);
        }
        else {
            return this.addNode(root.right, node);
        }
    }

    inorderTraversal(root = this.root, set = new Set()) {
        if (this.root == null) {
            return null;
        }
        if (root.left) {
            this.inorderTraversal(root.left, set);
        }
        if (root) {
            set.add(root.val);
        }
        if (root.right) {
            this.inorderTraversal(root.right, set);
        }
        return set;
    }
}

let tree = new BST();
tree.insertNode(25);
tree.insertNode(25);
tree.insertNode(22);
tree.insertNode(30);
console.log(tree.inorderTraversal(tree.root))

