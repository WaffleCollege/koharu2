//問題 与えられた二分木を左右反転する．

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
}

function invertTree(root){
    if(root === null){
        return null;
    }

    let leftCopy = root.left;
    root.left = root.right;
    root.right = leftCopy;
    // 入れ替え

    invertTree(root.left);
    invertTree(root.right);
    // 再起的に呼び出し

    return root;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

function printTree(root) {
    if (root) {
      console.log(root.val);
      printTree(root.left);
      printTree(root.right);
    }
  }


const root2 = invertTree(root1);

printTree(root2);
