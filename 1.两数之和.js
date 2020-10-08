/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let index=0;index<nums.length;index++){
        let item = nums[index];
        if((target - item) in obj){
            return [index, obj[target-item]];
        } else {
            obj[item] = index;
        }
    }
};
// @lc code=end

