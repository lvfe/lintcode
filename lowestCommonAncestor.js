/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null) return null;
  var set= new Set();
  var map = new WeakMap();
  var stack = [root];
  while(stack.length){
      var size = stack.length;
      while(size--){
        var font = stack.shift();
        if(font.left) {
            stack.push(font.left);
            map.set(font.left, font);
        }
        if(font.right) {
            stack.push(font.right);
            map.set(font.right, font);
        }
      }

      
  }  
  while(p){
      set.add(p);
      let parent = map.get(p);
      p = parent;
  }
  while(q){
     if(set.has(q)) return q;
      let parent = map.get(q);
      q = parent; 
  }
  return null;
};