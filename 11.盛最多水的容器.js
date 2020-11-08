/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let wight = 0;
    let start = 0;
    let end = height.length-1;
    while(start<end){
        if(height[start]<height[end]){
            let area = (end-start)*height[start];
            if(area>wight) widgt = area;
            start++;
        } else {
            let area = (end-start)*height[end];
            if(area>wight) widgt = area;
            end--;
        }
    }
    return widgt;
};
// @lc code=end

