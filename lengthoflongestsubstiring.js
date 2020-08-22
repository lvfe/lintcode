/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max =1;
    var start = 0;
    var end = 1;
    if(s.length<=1) return s.length;
    if(s.length==2 && s[0]===s[1]) return 1;
    while(start<s.length-1 && end <s.length){
        var substring = s.substring(start,end);
        if(substring.indexOf(s[end])===-1) {
            end++;
            max = Math.max(max, end-start);
        } else {
            var index = substring.lastIndexOf(s[end]);
            start += index+1;
            end++;
            max = Math.max(max, end-start)
        }

    }
    return max
};

console.log(lengthOfLongestSubstring('au'));