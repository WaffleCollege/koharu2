//問題 与えられた二分木を左右反転する．

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
}

function invertTree(root){
  // base case
  if(root === null){
    return null;
  }
  
  let leftCopy = root.left;
  root.left = root.right;
  root.right = leftCopy; // 入れ替え
  
  invertTree(root.left);
  invertTree(root.right); // 再起的に呼び出し
  
  return root;
}

function printTree(root) {
  if (root) {
    console.log(root.val);
    printTree(root.left);
    printTree(root.right);
  }
}


//テスト1
const root11 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const root12 = invertTree(root11);
printTree(root12);

const root21 = new TreeNode(4, 
  new TreeNode(3, new TreeNode(2), new TreeNode(1)), 
  new TreeNode(5, new TreeNode(1), new TreeNode(4)));
const root22 = invertTree(root21);
printTree(root22);

