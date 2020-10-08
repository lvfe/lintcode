/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var tmp  = [0,1];
    if(N<2) return tmp[N];
    for(let i=2;i<=N;i++){
        tmp[i] = tmp[i-1]+tmp[i-2];
    }
    return tmp[N];
};
// @lc code=end

