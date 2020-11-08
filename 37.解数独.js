/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board){                                                                                                                              
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]==='.'){
                for(let k=1;k<=9;k++)
                    if(isValid(i,j, board, k.toString())){
                        board[i][j] = k.toString();
                        solveSudoku(board);
                        board[i][j] ='.';
                    }
            }
        }
    }
}
isValid = (i, j, board, k)=>{
    for(let m = 0; m<9;m++){
        if(board[m][j] == k) return false;
        if(board[i][m]=== k) return false;
    }
    let x = Math.floor(i/3)*3;
    let y = Math.floor(j/3)*3;
    let f = true;
    for(let xi=0;xi<3;xi++){
        for(let xj=0;xj<3;xj++){
            if(board[x+xi][y+yi] == k) f= false;
        }
    }
    return f;
}
// var solveSudoku1 = function(board) {
//     //existing problem, tobe fixed
//     var ret = [];
//     var row = board.length;
//     var colmn = board[0].length;
//     fill(0,0, board)
//     return ret.length>1?ret[0]: null;
//     function fill(ri,cj, tmp){
//         if(ri==row && cj == 0){
//             console.log(tmp);
//             if(tmp.toString().indexOf('.')==-1)
//             {
//                 console.log(tmp.toString())
//                 ret=[...ret, [...tmp]];
//             }
//             return;
//         }
//         if(tmp[ri][cj]!=='.'){
//             if(cj==colmn-1) fill(ri+1, 0, tmp);
//             else fill(ri, cj+1, tmp)
//         }
//         let colmnnvalue = tmp.map(i=>i[cj]); 
//         var mmrow = Math.floor(ri/3)*3
//         var mmcol = Math.floor(cj/3)*3;
//         let nearby = [tmp[mmrow][mmcol],tmp[mmrow+1][mmcol],tmp[mmrow+2][mmcol],tmp[mmrow][mmcol+1],tmp[mmrow][mmcol+2],
//         tmp[mmrow+2][mmcol+1],tmp[mmrow+1][mmcol+2],tmp[mmrow+1][mmcol+1],tmp[mmrow+2][mmcol+2]];
        
//         for(let i=1;i<10;i++){
//             if(tmp[ri].indexOf(""+i)==-1&&
//             colmnnvalue.indexOf(""+i)==-1&&
//             nearby.indexOf(""+i)==-1
//             ){
//                 tmp[ri][cj] = ""+i;
//                 if(cj==colmn-1) fill(ri+1, 0, tmp);
//                 else fill(ri, cj+1, tmp)
//             }
//         }
//     }
// };
// @lc code=end

