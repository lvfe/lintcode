/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var ret = [nums];
  var n = nums.length;
  swap(0, nums);
  return ret.filter((i, index) => {
    var mm = ret.findIndex((t) => {
      return t.toString() === i.toString();
    }) 
    return mm=== index;
  });
  function swap(col, nums) {
    if (col == n) return;
    for (let i = col + 1; i < n; i++) {
      [nums[i], nums[col]] = [nums[col], nums[i]];

      ret = [...ret, [...nums]];
      swap(col + 1, nums);
      [nums[i], nums[col]] = [nums[col], nums[i]];

      swap(col + 1, nums);
    }
  }
};
// @lc code=end
