/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var ret = [];
    find(0, []);

    return ret.length;
    function find(row, tmp ){
        if(row==n){
            ret.push(tmp);
            return;
        }
        for(var col=0;col<n;col++){
            var cannotset = tmp.some((ci,ri)=>{
                return col===ci||(ci+ri===row+col)||(row-col===ri-ci);
            });
            if(!cannotset){
                find(row+1, [...tmp, col]);
            }else{
                continue;
            }

        }
    }
};
// @lc code=end

