/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var ret = [nums];
  var n = nums.length;
  var track = [];
  swap(0, nums);
  return ret
  function swap(col, nums) {
    if (col == n) return;
    for (let i = col + 1; i < n; i++) {
      if (nums[col] == nums[i]) continue;
      if(track.find(i=>i[0]==nums[col]&&nums[i]==i[1])) continue;
      track.push([nums[col], nums[i]]);
      [nums[i], nums[col]] = [nums[col], nums[i]];
      ret = [...ret, [...nums]];
      swap(col + 1, nums);
      [nums[i], nums[col]] = [nums[col], nums[i]];

      swap(col + 1, nums);
    }
  }
};
// @lc code=end
