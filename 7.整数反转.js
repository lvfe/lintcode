/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let f = 0;
    let newval;
    if(x<0){
        f = 1;
    }
    newval =  x.toString().substring(f);
    newval = newval.split("").reverse().join("")
    
    newval = ((f==1)?"-":"")+newval;
    const value = parseInt(newval);
    if(value<-1*Math.pow(2,31) || value>Math.pow(2,31)-1){
        return 0;
    } else
    return value;

};
// @lc code=end

