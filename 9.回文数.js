/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    
    const lenth = str.length;
    if(lenth<=1) return true;
    for(i=0;i<Math.floor(lenth/2);i++){
        if(str[i]!=str[lenth-i-1]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

