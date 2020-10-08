/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var ret = [];
    find(0, []);

    return ret;
    function find(row, tmp ){
        if(row==n){
            ret.push(tmp.map(i=>{
                var arr = new Array(n).fill('.');
                arr[i]='Q';
                return arr.join('');
            }));
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

