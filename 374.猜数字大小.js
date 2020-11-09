/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n, low=1) {
   let mid =  parseInt((low+n)/2);
   if((low+n)%2==1) {
       if(0==guess(mid+1)) return mid+1;
   }
  let ret = guess(mid);
  if (ret == 0) return mid;
  if (ret < 0) {
    return guessNumber(mid,1);
  } else {
    return guessNumber(n, mid);
  }
};

// @lc code=end
