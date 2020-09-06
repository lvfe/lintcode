/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var arr = [];
    var findDepth = (root) => {
        if(root===null) return 0;
        return Math.max(findDepth(root.left)+1, findDepth(root.right)+1);
    }
    var helper = (node)=>{
        if(node===null) return null;
        var rootDepath = findDepth(node.left)+findDepth(node.right);
        var childDep = Math.max(helper(node.left), helper( node.right))
        return Math.max(rootDepath, childDep);
    }
    if(root===null) return 0;
    return helper(root);
};