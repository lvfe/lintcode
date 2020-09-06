/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root==null) return true;
    var stack = [root];
    var isSym = (arr)=>{
        var mm = arr.join(',');
        var m = arr.reverse();
        var s = m.join(',');
        return s===mm;
    }
    while(stack.length){
        var size = stack.length;
        while(size--){
            var node = stack.shift();
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);

        }
        if(!isSym(stack)) return false;
    }
    return true
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root==null) return true;
    var help = (left, right)=>{
        if(left==null && right === null) return true;
        if(left==null && right !=null) return false;
        if(left!=null && right==null) return false;
        if(left.val===right.val) {
            return help(left.left, right.right) && help(left.right, right.left)
        } return false;
    }
    return help(root.left, root.right);
};