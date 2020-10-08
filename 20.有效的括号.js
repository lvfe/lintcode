/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left = ["(","[", "{"];
    let right = [")","]","}"];
    let stack = [];
    let arr = s.split('');
    for(let mm in arr){
        let i = arr[mm];
        if(left.includes(i)){
            stack.push(i);
        } else {
            if(stack.length==0) return false;
            let last = stack.pop();
            let index = left.indexOf(last);
            
            if(right.indexOf(i)!=index) {
                return false;
            }

        }
    }
    return stack.length==0;
};
console.log(isValid("(]"));
// @lc code=end

