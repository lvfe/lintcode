/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length==1) return s;
    if(s.length==2 && s[0]!=s[1]) return s[0];
    const length = s.length;
    track = "";
    const findLongest = (index)=>{
        let offset = 1;
        let end = index;
        while(s[index]==s[end+1]){
            end++;
        }
        while(offset<=index && offset+end<length && s[index-offset]==s[end+offset]){
            offset++;
        }
        const value = s.substring(index-offset+1, end+offset);
        console.log(value, index,  end, offset);
        if(value.length>track.length){
            track = value;
        }
    }
    for(i=0;i<length;i++){
        findLongest(i);
        while(i+1<length-1&&s[i]==s[i+1]){
            i++;
        }
    }
    return track;
};
// @lc code=end

