
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (newNode.data < rootNode.data) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  height(node = this.root, arr = [], length = 0) {
    if (node) {
      arr.push(node.data);
    }

    if (!node.left && !node.right) {
      return arr.length;
    }

    if (node.left) {
      let val = this.height(node.left, arr, length);
      if (val > length) {
        length = val;
      }
      arr.pop();
    }

    if (node.right) {
      let val = this.height(node.right, arr, length);
      if (val > length) {
        length = val;
      }
      arr.pop();
    }
    return length;
  }
  preOrderRecursive(node = this.root, arr = []) {
    if (node) {
      arr.push(node.data);
    } else {
      return arr;
    }

    if (node.left) {
      this.preOrderRecursive(node.left, arr);
    }
    if (node.right) {
      this.preOrderRecursive(node.right, arr);
    }
    return arr;
  }

  preOrderIterative(node = this.root) {
    let arr = [node];
    let answer = [];

    while (arr.length != 0) {
      let node = arr.pop();
      answer.push(node.data);
      if (node.right) {
        arr.push(node.right);
      }
      if (node.left) {
        arr.push(node.left);
      }
    }
    return answer;
  }

  leftView(node = this.root) {
    let arr1 = [node];
    let arr2 = [],
      answer = [node.data];
    while (arr1.length != 0) {
      let node = arr1.shift();
      if (node.left) {
        arr2.push(node.left);
      }
      if (node.right) {
        arr2.push(node.right);
      }
      if (arr1.length == 0 && arr2.length != 0) {
        console.log(...arr2);
        answer.push(arr2[0].data);
        arr1 = [...arr2];
        arr2 = [];
      }
    }
    return answer;
  }

  topView() {
    if (this.root) {
      this.root.col = 0;
      var arr = [this.root];
      var map = new Map();
    }
    while (arr.length != 0) {
      let node = arr.shift();
      if (!map.has(node.col)) {
        map.set(node.col, node.data);
      }
      if (node.left) {
        node.left.col = node.col - 1;
        arr.push(node.left);
      }
      if (node.right) {
        node.right.col = node.col + 1;
        arr.push(node.right);
      }
    }
    arr = [];
    map.forEach((val, key) => {
      arr.push([key, val]);
    });
    arr.sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    });

    let ans = [];
    arr.forEach((a) => ans.push(a[1]));
    return ans;
  }

  bottomView() {
    if (this.root) {
      this.root.col = 0;
      var arr = [this.root];
      var map = new Map();
    }
    while (arr.length) {
      let node = arr.shift();

      map.set(node.col, node.data);

      if (node.left) {
        node.left.col = node.col - 1;
        arr.push(node.left);
      }
      if (node.right) {
        node.right.col = node.col + 1;
        arr.push(node.right);
      }
    }
    return map;
  }
}

let tree = new BinaryTree();

tree.insert(25);
tree.insert(21);
tree.insert(30);
tree.insert(18);
tree.insert(22);
tree.insert(9);
tree.insert(20);
tree.insert(21);
tree.insert(24);
tree.insert(26);
tree.insert(32);
tree.insert(25);
tree.insert(28);
tree.insert(31);
tree.insert(35);

//console.log(tree);
//console.log(tree.bottomView());


var verticalTraversal = function(root) {
    root.row=0;
    root.col=0;
    let arr = [root]; let ans = [];
    
    while(arr.length){
        let node=arr.shift();
        ans.push([node.row,node.col,node.data]);
        if(node.left){
            node.left.row=node.row+1;
            node.left.col=node.col-1;
            arr.push(node.left);
        }
        if(node.right){
            node.right.row=node.row+1;
            node.right.col=node.col+1;
            arr.push(node.right);
        }
    }
    
    ans.sort((a,b)=>{
        if((a[0]>b[0] || a[0]<b[0] || a[0]==b[0]) && a[1]<b[1]){
            return -1;
         }
        else if((a[0]>b[0] || a[0]<b[0] || a[0]==b[0]) && a[1]>b[1]){
            return 1;
        }
        else if ((a[0] > b[0] || a[0] < b[0]) && a[1] == b[1]) {
            return 0;
            }
        else if(a[0]==b[0] && a[1]==b[1]){
            if(a[2]>b[2]){
                return 1;
            }
            else if(a[2]<b[2]){
                return -1;
            }else{
                return 0;
            }
        }
    });
    
        let result = [[]];
        let k = 0;
        let i;
        for (i = 1; i < ans.length; i++) {
          if (ans[i][1] == ans[i - 1][1]) {
            result[k].push(ans[i - 1][2]);
          } else {
            result[k].push(ans[i - 1][2]);
            if (i == ans.length - 1) {
              result.push([ans[i][2]]);
              return result;
            } else {
              result.push([]);
              k++;
            }
          }
        }
        if (ans[i - 1][1] == ans[i - 2][1]) {
          result[k].push(ans[i - 1][2]);
        }

        return result;
};

console.log(verticalTraversal(tree.root));



