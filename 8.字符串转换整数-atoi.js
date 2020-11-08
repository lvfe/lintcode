/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimLeft();
    if(/^([-|+]?[\d]+)/g.test(s)==false){
        return 0;
    }
    const value = RegExp.$1;
    console.log(RegExp.$0, RegExp.$1);
    const ret = parseInt(value);
    if(ret<-1*Math.pow(2, 31)){ return -1*Math.pow(2,31) }
    if(ret>Math.pow(2, 31)-1) { return Math.pow(2,31)-1; }
    return ret;
};
// @lc code=end

