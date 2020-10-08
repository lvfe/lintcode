/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root===null) return [];
    var ret = [];
    var path = [];
    var dfs = (root)=>{
        if(root==null) return null;
        path.push(root.val);
        dfs(path.left);
        dfs(path.right);
        if(path.left===null &&path.right===null){
            ret.push(path.join('->'));
        }
        path.pop();

    }
    dfs(root);
    return ret;
};