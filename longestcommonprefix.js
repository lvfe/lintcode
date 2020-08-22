/**
 * @param {string[]} strs
 * @return {string}
 */
var findmin = (strs) => {
    var min = 999;
    strs.forEach(i=>{
        min = Math.min(i, min)
    })
    return min;
}
var longestCommonPrefix = function(strs) {
    var end= 1;
    if(strs.length==0 ||!strs) return "";
    if(strs.length==1) return strs[0]
    var minlength = findmin(strs.map(i=>i.length))
    console.log('minlength', minlength);
    if(minlength==1){
        console.log(1,strs.every(item=>{
            return item[0]==strs[0][0]
        }));
       return strs.every(item=>item[0]==strs[0][0])?strs[0][0]:"";
    } 
    var flag = 0;
    while(end<=minlength){
        var substr = strs[0].substring(0, end)
        var ret = strs.every(item=>item.indexOf(substr)===0)
        console.log(ret, substr);
        if(ret){
            end++;
        } else {
            flag = 1;
            break;
        }
    }
    if(flag==0 && end>minlength) return strs[0].substring(0,minlength)
    if(end>0)
    return strs[0].substring(0, end-flag)
    else return "";
};

console.log('800000,',longestCommonPrefix(["aaa","aa","aaa"]));
